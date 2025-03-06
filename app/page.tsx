"use client";

import React from "react";
import Header from "@/components/shared/header";
import Layout from "@/components/shared/layout";
import dynamic from "next/dynamic";

const TimerButton = dynamic(
  () => import("@/components/features/timer-button"),
  {
    ssr: false,
  }
);

/**
간단한 TODO LIST 만들기
  1. 입력 필드 기능
    - 텍스트 입력 필드 생성
  2. 추가 기능 (Add Todo)
    - 추가 버튼 이벤트를 통해 새로운 Todo 항목 추가
      - 입력값이 공백이거나 빈 문자열이면 추가하지 않음
  3. 삭제 기능 (Remove Todo)
    - 각 Todo 항목 옆에 “삭제” 버튼 추가
      - 삭제 버튼 클릭 시 해당 항목을 삭제
  4. 화면 렌더링 및 스타일링 (선택)
    - 자유
*/

export default function Home() {
  return (
    <Layout>
      <Layout.Header>
        <Header />
      </Layout.Header>
      <Layout.Content>{/* 작업 영역 */}</Layout.Content>
      <Layout.Bottom>
        <TimerButton initText="시작" size="md" initTime={20 * 60} />
      </Layout.Bottom>
    </Layout>
  );
}
