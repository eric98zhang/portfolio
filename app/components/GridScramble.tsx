"use client";

import LetterScrambleBase from "./LetterScrambleBase";

function GridFormat({ children }: { children: string }) {
  return (
    <div className="grid grid-cols-3">
      {children.split("").map((letter, index) => (
        <div key={index}>{letter}</div>
      ))}
    </div>
  );
}

export default function GridScramble({ children }: { children: string }) {
  return (
    <LetterScrambleBase
      LayoutComponent={GridFormat}
      scrambleTime={2000}
      scrambleOnLoad={true}
    >
      {children}
    </LetterScrambleBase>
  );
}
