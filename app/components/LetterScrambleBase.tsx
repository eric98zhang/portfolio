"use client";

import React, { FC, useState, useEffect } from "react";
import internal from "stream";

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
}: {
  children: string;
  LayoutComponent: FC<{children: string}>;
  scrambleTime?: number;
}) {
  const [letters, setLetters] = useState(children);

  function handleMouseEnter() {
    const scrambleInterval = setInterval(() => {
      setLetters(scramble(children));
    }, 25);

    // After 1 second, stop scrambling and return word to its original form
    const resetTimeout = setTimeout(() => {
      clearInterval(scrambleInterval);
      setLetters(children);
    }, scrambleTime);

    // Clear interval and timeout if they are still running when component is unmounted
    return () => {
      clearInterval(scrambleInterval);
      clearTimeout(resetTimeout);
    };
  }

  return (
    <div onMouseEnter={handleMouseEnter} onTouchStart={handleMouseEnter}>
      <LayoutComponent>
        {letters}
      </LayoutComponent>
    </div>
  );
}
