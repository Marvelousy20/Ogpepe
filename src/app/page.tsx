"use client";

import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Roadmap from "@/components/Roadmap";
import Memes from "@/components/Memes";
import HowToBuy from "@/components/How";
import Tokenomics from "@/components/Tokenomics";
import Question from "@/components/Question";

import { useScroll } from "@/context/useScroll";

export default function Home() {
  const { refs } = useScroll();
  return (
    <main className="">
      <Hero />
      <div ref={refs.introduction}>
        <Introduction />
      </div>
      <div ref={refs.roadmap}>
        <Roadmap />
      </div>
      <Memes />
      <div ref={refs.howToBuy}>
        <HowToBuy />
      </div>
      <div ref={refs.tokenomics}>
        <Tokenomics />
      </div>
      <Question />
    </main>
  );
}
