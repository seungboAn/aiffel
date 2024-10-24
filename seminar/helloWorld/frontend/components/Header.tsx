"use client";

import React from 'react';
import { useState } from "react";
import ScrollIndicator from "./ScrollIndicator";
import Image from "next/image";

export default function Header(): JSX.Element {
  const [menu, setMenu] = useState<string[]>([
    "HOME",
    "Python",
    "AI",
    "Contact"
  ]);

  const handleClick = (menu: string) => {
    const element: HTMLElement | null = document.querySelector(`#${menu}`);
    if (element) {
      document.scrollingElement?.scrollTo({
        top: element?.offsetTop - 120,
        behavior: "smooth",
      });
    }
  };

  return (
    <header id="HOME" className="fixed top-0 z-50 w-full bg-white">
      <div className="flex justify-between w-11/12 m-auto font-bold">
        <div className="flex">
          <button
            className="px-4 py-8 cursor-pointer hover:text-blue-600"
            onClick={() =>
              document.scrollingElement?.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            <div>
              <Image alt={"profile"} width={104.15} height={32} src="/logo.png" />
            </div>
          </button>
        </div>
        <div className="flex">
          {menu.map((menu, idx) => {
            return (
              <button
                key={idx}
                className="px-12 py-8 cursor-pointer hover:text-blue-600 "
                onClick={() => handleClick(menu)}
              >
                {menu}
              </button>
            );
          })}
        </div>
      </div>
      <ScrollIndicator />
    </header>
  );
}
