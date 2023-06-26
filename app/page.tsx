import { inter_tight, roboto_mono } from "./fonts";
import GridScramble from "./components/GridScramble";
import LineScramble from "./components/LineScramble";
import Link from "next/link";
import { NAVBAR_ENTRIES } from "./config/consts";

export default function Home() {
  return (
    <main className={`${inter_tight.className} flex h-screen flex-col justify-between`}>
      <div className="mx-6 my-4 flex justify-between sm:mx-24 sm:my-20">
        <Link href={NAVBAR_ENTRIES[0][1]}>
          <LineScramble>{NAVBAR_ENTRIES[0][0]}</LineScramble>
        </Link>
        <Link href={NAVBAR_ENTRIES[1][1]}>
          <LineScramble>{NAVBAR_ENTRIES[1][0]}</LineScramble>
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center leading-none">
        <div>I AM</div>
        <div className={`${roboto_mono.className} text-9xl`}>
          <GridScramble>ERICZHANG</GridScramble>
        </div>
      </div>
      <div className="mx-6 my-4 flex justify-between sm:mx-24 sm:my-20">
        <Link href={NAVBAR_ENTRIES[2][1]}>
          <LineScramble>{NAVBAR_ENTRIES[2][0]}</LineScramble>
        </Link>
        <Link href={NAVBAR_ENTRIES[3][1]}>
          <LineScramble>{NAVBAR_ENTRIES[3][0]}</LineScramble>
        </Link>
      </div>
    </main>
  );
}
