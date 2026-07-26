"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

interface TypingTitleProps {
  text: string;
  delay?: number;
  tag?: "h2" | "h3";
  className?: string;
}

export function TypingTitle({ text, delay = 0, tag = "h2", className = "" }: TypingTitleProps) {
  const shouldReduceMotion = useReducedMotion();
  const [typedText, setTypedText] = useState(shouldReduceMotion ? text : "");

  useEffect(() => {
    if (shouldReduceMotion) {
      setTypedText(text);
      return;
    }

    setTypedText("");
    let currentIndex = 0;
    let intervalId: number | null = null;

    const startTimer = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        currentIndex += 1;
        setTypedText(text.slice(0, currentIndex));

        if (currentIndex >= text.length && intervalId !== null) {
          window.clearInterval(intervalId);
        }
      }, 24);
    }, delay);

    return () => {
      window.clearTimeout(startTimer);
      if (intervalId !== null) {
        window.clearInterval(intervalId);
      }
    };
  }, [delay, shouldReduceMotion, text]);

  const Tag = tag;

  return (
    <Tag className={`${className} typing-title`}>
      {typedText}
      <span className="typing-title-cursor" aria-hidden="true" />
    </Tag>
  );
}
