"use client";
import { useState } from "react";
import { roboto_mono } from "../../fonts";
import { TypeAnimation } from "react-type-animation";

const PARAGRAPHS = [
  `i'm a machine learning engineer at meta platforms and graduate from the university of waterloo.\n`,
  1000,
  `i'm a machine learning engineer at meta platforms and graduate from the university of waterloo.\n
  at meta, i think about how to use machine learning to solve ad market dynamics problems.\n`,
  1000,
  `i'm a machine learning engineer at meta platforms and graduate from the university of waterloo.\n
  at meta, i think about how to use machine learning to solve ad market dynamics problems.\n
  i majored in computer science and statistics.\n`,
  1000,
  `i'm a machine learning engineer at meta platforms and graduate from the university of waterloo.\n
  at meta, i think about how to use machine learning to solve ad market dynamics problems.\n
  i majored in computer science and statistics.\n
  i like to focus on first principles, foundations, cleanliness, and details, roughly in that order.`,
];

export default function Home() {
  const [isSkipped, setIsSkipped] = useState(false);
  return (
    <>
      <div
        className={`${roboto_mono.className} mx-auto my-4 max-w-2xl space-y-4`}
        onClick={() => setIsSkipped(true)}
      >
        {isSkipped ? (
          <>
            <p>
              i'm a machine learning engineer at meta platforms and graduate
              from the university of waterloo.
            </p>
            <p>
              at meta, i think about how to use machine learning to solve ad
              market dynamics problems.
            </p>
            <p>i majored in computer science and statistics.</p>
            <p>
              i like to focus on first principles, foundations, cleanliness, and
              details, roughly in that order.
            </p>
          </>
        ) : (
          <TypeAnimation
            sequence={PARAGRAPHS}
            wrapper="span"
            cursor={false}
            speed={70}
            style={{ whiteSpace: "pre-line" }}
          />
        )}
      </div>
    </>
  );
}
