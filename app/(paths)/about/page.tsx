"use client";
import { useState } from "react";
import { roboto_mono } from "../../fonts";
import { TypeAnimation } from "react-type-animation";

const SENTENCES = [
  "...",
  "It's a machine!"
];

let TYPING_ANIMATION_SETNENCES = [SENTENCES[0], 1000];
for (let i = 1; i < SENTENCES.length; ++i) {
  TYPING_ANIMATION_SETNENCES[2 * i] =
    TYPING_ANIMATION_SETNENCES[2 * (i - 1)] + "\n\n" + SENTENCES[i];
  TYPING_ANIMATION_SETNENCES[2 * i + 1] = 1000;
}

TYPING_ANIMATION_SETNENCES = [".", 250, "..", 250, "...", 500].concat(TYPING_ANIMATION_SETNENCES)

export default function Home() {
  const [isSkipped, setIsSkipped] = useState(false);

  return (
    <main className="mx-3">
      <div
        className={`${roboto_mono.className} mx-auto my-4 max-w-2xl space-y-4 text-sm`}
        onClick={() => setIsSkipped(true)}
      >
        {isSkipped ? (
          <>
            <p style={{ whiteSpace: "pre-line" }}>
              {
                TYPING_ANIMATION_SETNENCES[
                  TYPING_ANIMATION_SETNENCES.length - 2
                ]
              }
            </p>
          </>
        ) : (
          <TypeAnimation
            sequence={TYPING_ANIMATION_SETNENCES}
            wrapper="span"
            cursor={false}
            speed={70}
            deletionSpeed={99}
            style={{ whiteSpace: "pre-line" }}
          />
        )}
      </div>
    </main>
  );
}
