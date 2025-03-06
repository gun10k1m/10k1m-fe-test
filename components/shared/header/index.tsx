"use client";

import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <div className="flex justify-between items-center w-full max-w-screen-md h-16 py-[10px] px-6 fixed top-0 z-50">
      <Image alt="logo" src={"/logo.png"} width={40} height={40} priority />
    </div>
  );
}
