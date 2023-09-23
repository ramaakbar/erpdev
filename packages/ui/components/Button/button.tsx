"use client";

import React from "react";

import { twMerge } from "tailwind-merge";

export function Button({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
  href?: string;
}): JSX.Element {
  return (
    <button
      className={twMerge(
        "bg-primary text-primary-foreground rounded p-2",
        className
      )}
      type="button"
    >
      {children}
    </button>
  );
}
