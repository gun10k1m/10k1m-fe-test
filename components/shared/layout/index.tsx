"use client";

import React, { PropsWithChildren } from "react";

interface LayoutProps extends PropsWithChildren {
  className?: string;
  scrollRef?: React.RefObject<HTMLDivElement>;
}

function Layout({ children }: LayoutProps) {
  return (
    <div
      className={
        "mx-auto min-h-dvh overflow-hidden max-h-dvh w-full max-w-screen-md flex flex-col"
      }
    >
      {children}
    </div>
  );
}

function Header({ children }: LayoutProps) {
  return <header className={"w-full"}>{children}</header>;
}

function Content({ children }: LayoutProps) {
  return (
    <div
      className={
        "flex-grow overflow-auto relative max-h-[calc(100vh-120px)] mb-14 mt-16 p-4"
      }
    >
      {children}
    </div>
  );
}

function Bottom({ children }: LayoutProps) {
  return <div className={"w-full"}>{children}</div>;
}

Layout.Header = Header;
Layout.Content = Content;
Layout.Bottom = Bottom;

export default Layout;
