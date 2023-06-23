"use client";

import LetterScrambleBase from "./LetterScrambleBase";

export default function GridScramble({ children }: { children: string }) {
  return (
    <LetterScrambleBase
      LayoutComponent={({ children }: { children: string }) => <>{children}</>}
    >
      {children}
    </LetterScrambleBase>
  );
}
