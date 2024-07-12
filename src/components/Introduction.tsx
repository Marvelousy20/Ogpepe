import React from "react";
import Image from "next/image";

const Introduction = () => {
  return (
    <div className="bg-green text-white relative pt-[4.43rem]">
      <div className="grid grid-cols-2 items-start px-[6rem]">
        <div className="relative">
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

        <div className="">
          <h1 className="font-mochiy text-[4.375rem]">Introduction</h1>

          <p className="font-monda text-[1.75rem]">
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

      <div className="mt-[4.43rem]">
        <Image src="/intro.png" alt="intro" width={1472} height={286} />
      </div>
    </div>
  );
};

export default Introduction;
