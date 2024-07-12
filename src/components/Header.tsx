"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useScroll } from "@/context/useScroll";

function Header() {
  const { scrollToComponent } = useScroll();

  return (
    <header className="flex bg-green items-center justify-between py-4 px-6 lg:px-14 border-b-[0.5px] border-white !border-opacity-[39%]">
      <div className="">
        <div className="flex items-center gap-x-7">
          <div>
            <Image src="/logo.svg" alt="logo" width={72} height={72} />
          </div>

          <div>
            <h3 className="lg:text-[2.3rem] text-[1.5rem] font-poppins font-semibold">
              OG Pepe
            </h3>
            <span className="lg:text-xl text-[0.9375rem] font-poppins font-normal">
              The Original PEPE
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-x-[6rem] font-mouse">
        <div className="text-white">
          <ul className="flex gap-x-[1.81rem] text-3xl">
            <li className="cursor-pointer hover:text-[#66974C]">
              <Link href="/">Home</Link>
            </li>
            <li
              onClick={() => scrollToComponent("introduction")}
              className="cursor-pointer hover:text-[#66974C]"
            >
              Introduction
            </li>
            <li
              onClick={() => scrollToComponent("roadmap")}
              className="cursor-pointer hover:text-[#66974C]"
            >
              Roadmap
            </li>
            <li
              onClick={() => scrollToComponent("howToBuy")}
              className="cursor-pointer hover:text-[#66974C]"
            >
              How to Buy
            </li>
            <li
              onClick={() => scrollToComponent("tokenomics")}
              className="cursor-pointer hover:text-[#66974C]"
            >
              Tokenomics
            </li>
          </ul>
        </div>

        <button className="bg-[#66974C] rounded-[37px] py-4 px-[2.875rem] text-white text-[1.625rem]">
          Buy now
        </button>
      </div>
    </header>
  );
}

export default Header;
