import React from "react";
import Image from "next/image";

const tokenomics = [
  {
    title: "Total Supply:",
    text: "37,321 OG Pepe",
  },

  {
    title: "Tax:",
    text: "0/0 for buy/sell",
  },
  {
    title: "Distribution:",
    text: "Fair and even, with no team wallets.",
  },
  {
    title: "Burned: ",
    text: "20%",
  },
];

const Tokenomics = () => {
  return (
    <div className="bg-green text-white lg:pt-[8rem] pb-16 relative">
      <div className="grid grid-cols-2">
        <div className="relative">
          <Image
            src="/suprisedemoji.png"
            alt="surpriesedemoji"
            width={582}
            height={543}
            className="pl-16"
          />

          <Image
            src="/happyemoji.png"
            alt="happy"
            width={150}
            height={206}
            className="absolute left-0 bottom-16"
          />
        </div>

        <div className="absolute right-0 top-0">
          <Image src="/star.svg" alt="start" width={200} height={200} />
        </div>

        <div>
          <h1 className="font-mochiy lg:text-[4.375rem]">Tokenomics</h1>

          <div className="space-y-[1.875rem] mt-16">
            {tokenomics.map((t, idx) => (
              <div key={idx} className="flex gap-3">
                <Image src="/semoji.png" alt="semoji" width={55} height={55} />

                <div>
                  <p className="text-[2rem] font-mochiy">{t.title}</p>
                  <p className="font-monda text-[2.1rem]">{t.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center mt-12 max-w-[48rem] mx-auto">
        <h3 className="text-[#81D951] font-monda text-4xl">
          Discover the strength of our tokenomics and how it fuels our journey.
        </h3>

        <button className="font-monda bg-[#66974C] px-8 py-4 mt-6 rounded-[12px]">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Tokenomics;
