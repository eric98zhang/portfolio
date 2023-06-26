"use client";

import React, { FC, useState, useEffect } from "react";

function scramble(word: string) {
  return word
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");
}

export default function LetterScrambleBase({
  children,
  LayoutComponent,
  scrambleTime = 500,
  scrambleOnLoad = false,
}: {
  children: string;
  LayoutComponent: FC<{ children: string }>;
  scrambleTime?: number;
  scrambleOnLoad?: boolean;
}) {
  const [letters, setLetters] = useState(children);
  const [isScrambling, setIsScrambling] = useState(false);

  function handleMouseEnter() {
    if (isScrambling) {
      return () => {};
    }
    setIsScrambling(true);
    const scrambleInterval = setInterval(() => {
      setLetters(scramble(children));
    }, 25);

    // After 1 second, stop scrambling and return word to its original form
    const resetTimeout = setTimeout(() => {
      clearInterval(scrambleInterval);
      setLetters(children);
      setIsScrambling(false);
    }, scrambleTime);

    // Clear interval and timeout if they are still running when component is unmounted
    return () => {
      clearInterval(scrambleInterval);
      clearTimeout(resetTimeout);
    };
  }

  if (scrambleOnLoad) {
    useEffect(handleMouseEnter, []);
  }

  return (
    <div onMouseEnter={handleMouseEnter} onTouchStart={handleMouseEnter}>
      <LayoutComponent>{letters}</LayoutComponent>
    </div>
  );
}
