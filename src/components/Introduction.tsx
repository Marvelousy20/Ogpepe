import React from "react";
import Image from "next/image";

const Introduction = () => {
  return (
    <div className="bg-green text-white relative pt-[4.43rem]">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-start lg:px-[6rem] px-8 gap-y-12">
        <div className="relative hidden lg:block">
          <Image
            src="/emojitwo_container.svg"
            alt="container"
            width={545}
            height={535}
            className="relative"
          />
          <Image
            src="/emoji_two.svg"
            alt="emoji_two"
            width={478}
            height={477}
            className="absolute top-10 left-10"
          />
        </div>

        <div className="relative lg:hidden flex justify-center">
          <Image
            src="/emojitwo_container.svg"
            alt="container"
            width={301}
            height={301}
            className="relative"
          />
          <Image
            src="/emoji_two.svg"
            alt="emoji_two"
            width={267}
            height={267}
            className="absolute top-6 left-16"
          />
        </div>

        <div className="">
          <h1 className="font-mochiy text-[2.81rem] lg:text-[4.375rem]">
            Introduction
          </h1>

          <p className="font-monda lg:text-[1.75rem] mt-6 lg:mt-8">
            Welcome to OG Pepe, the home of the oldest and rarest Pepe tokens.
            With a circulating supply of just 37,321 tokens and a commitment to
            0/0 tax, no team wallets, or any sketchy shenanigans, OG Pepe stands
            as a beacon of transparency and community-driven success in the
            crypto world. Join us as we aim to flip the price of ETH and BTC,
            gaining international visibility and notoriety for our beloved
            brand.
          </p>
        </div>
      </div>

      <div className="mt-12 lg:mt-[4.43rem]">
        <Image src="/intro.png" alt="intro" width={1472} height={286} />
      </div>
    </div>
  );
};

export default Introduction;
