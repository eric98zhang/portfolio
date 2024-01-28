"use client";

import Link from "next/link";
import { Divide as Hamburger } from "hamburger-react";
import React, { useState } from "react";
import { NAVBAR_ENTRIES } from "@/app/config/consts";

const DRAWER_TRANSITION_TIME: number = 250;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  function handleBurgerToggle() {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setIsOpen(!isOpen);
    }, 1);
    setTimeout(() => {
      setIsTransitioning(false);
    }, DRAWER_TRANSITION_TIME);
  }

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-grow flex-col">
        <header>
          <div className="box-border flex flex-row items-center justify-between border-b border-foreground text-xs">
            <Link href="/">
              <div className="p-4">ERICZHANG</div>
            </Link>
            <button className="sm:hidden" onClick={handleBurgerToggle}>
              <Hamburger size={17} toggled={isOpen} />
            </button>
            <div className="hidden content-center justify-end space-x-4 p-4 sm:flex">
              {NAVBAR_ENTRIES.map(([name, url], index) => (
                <Link href={url} key={index}>
                  <div>{name}</div>
                </Link>
              ))}
            </div>
          </div>
          {(isOpen || isTransitioning) && (
            <>
              <div
                className="fixed bottom-0 left-0 right-0 top-12"
                onClick={handleBurgerToggle}
              />
              <div
                className={`
              ${isOpen ? "opacity-100" : "opacity-0"}
                fixed bottom-0 left-0 top-12 w-72 border-r border-t border-foreground
                bg-background text-xs transition-all duration-[${DRAWER_TRANSITION_TIME}ms]
              `}
              >
                {NAVBAR_ENTRIES.map(([name, url], index) => (
                  <Link href={url} key={index}>
                    <div className="border-b border-foreground p-4">
                      {name}
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </header>
        {children}
      </div>
      <footer className="box-border border-t border-foreground p-4 text-xs">
        END
      </footer>
    </div>
  );
}
