"use client";

import Link from "next/link";
import { useState } from "react";

export default function Page() {
  return (
    <main className="mx-3">
      <div className="mx-auto max-w-2xl text-sm">
        <h1 className="mt-16 text-4xl">RESTRICTED AREA</h1>
        <div className="mt-8 mb-2 text-lg">AVAILABLE OPTIONS</div>
        <Link href="/locked/llm">LLM</Link>
        <form className="" action="/auth/signout" method="post">
          <button type="submit">
            SIGN OUT
          </button>
        </form>
      </div>
    </main>
  );
}
