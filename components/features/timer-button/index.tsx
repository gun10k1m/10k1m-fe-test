"use client";

import Button from "@/components/shared/button";
import { formatTime } from "@/utils/date.util";
import React, { useState, useEffect, useRef, useCallback } from "react";

interface ITimerButton {
  initText?: string;
  initTime?: number;
  size?: "sm" | "md" | "lg";
}

export default function TimerButton({
  initText = "시작",
  size = "sm",
  initTime = 20 * 60,
}: ITimerButton) {
  const INITIAL_TIME = initTime;
  const LOCAL_STORAGE_KEY = "timerStart";

  const [mounted, setMounted] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(INITIAL_TIME);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setMounted(true);

    const storedStart = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedStart) {
      const startTime = parseInt(storedStart, 10);
      const elapsed = Math.floor((Date.now() - startTime) / 1000);
      if (elapsed < INITIAL_TIME) {
        setIsRunning(true);
        setTimeLeft(INITIAL_TIME - elapsed);
      } else {
        localStorage.removeItem(LOCAL_STORAGE_KEY);
      }
    }
  }, [INITIAL_TIME]);

  const startTimer = () => {
    const startTime = Date.now();
    localStorage.setItem(LOCAL_STORAGE_KEY, startTime.toString());
    setIsRunning(true);
    setTimeLeft(INITIAL_TIME);
  };

  const stopTimer = useCallback(() => {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    setIsRunning(false);
    setTimeLeft(INITIAL_TIME);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }, [INITIAL_TIME]);

  const handleButtonClick = () => {
    if (!isRunning) {
      startTimer();
    } else {
      stopTimer();
    }
  };

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            stopTimer();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, stopTimer]);

  if (!mounted) return null;

  return (
    <Button
      size={size}
      className="w-full fixed bottom-4 max-w-[768px]"
      onClick={handleButtonClick}
      disabled={isRunning}
    >
      {isRunning ? formatTime(timeLeft) : initText}
    </Button>
  );
}
