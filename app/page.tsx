import Image from "next/image";
import { roboto_mono } from "./fonts";
import GridScramble from "./components/GridScramble";
import LineScramble from "./components/LineScramble"

export default function Home() {
  return (
    <main className="flex h-screen flex-col justify-between">
      <div className="mx-6 my-4 flex justify-between md:mx-24 md:my-20">
        <LineScramble>EXAMPLES</LineScramble>
        <LineScramble>ABOUT</LineScramble>
      </div>
      <div className="flex flex-col items-center justify-center leading-none">
        <div>I AM</div>
        <div className={`${roboto_mono.className} text-9xl`}>
          <GridScramble>ERICZHANG</GridScramble>
        </div>
      </div>
      <div className="mx-6 my-4 flex justify-between md:mx-24 md:my-20">
        <LineScramble>RANDOM</LineScramble>
        <LineScramble>NUMBERS</LineScramble>
      </div>
    </main>
  );
}
