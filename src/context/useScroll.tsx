"use client";

// src/contexts/ScrollContext.tsx
import React, { createContext, useContext, useRef, RefObject } from "react";

type SectionKey = "introduction" | "roadmap" | "howToBuy" | "tokenomics"; // Add other keys as needed

interface ScrollContextType {
  refs: {
    [key in SectionKey]: RefObject<HTMLDivElement>;
  };
  scrollToComponent: (key: SectionKey) => void;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const refs = {
    introduction: useRef<HTMLDivElement>(null),
    roadmap: useRef<HTMLDivElement>(null),
    howToBuy: useRef<HTMLDivElement>(null),
    tokenomics: useRef<HTMLDivElement>(null),
    // Add more refs as needed
  };

  const scrollToComponent = (key: SectionKey) => {
    const ref = refs[key];
    if (ref && ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <ScrollContext.Provider value={{ refs, scrollToComponent }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScroll must be used within a ScrollProvider");
  }
  return context;
};
