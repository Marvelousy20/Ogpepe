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
    <div className="bg-green text-white lg:pt-[8rem] pt-[6rem] pb-16 relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-6">
        <div className="relative order-2 lg:order-1">
          <Image
            src="/suprisedemoji.png"
            alt="surpriesedemoji"
            width={582}
            height={543}
            className="pl-16 hidden lg:block"
          />

          <div className="flex justify-center">
            <Image
              src="/suprisedemoji.png"
              alt="surpriesedemoji"
              width={331}
              height={310}
              className=" lg:hidden"
            />
          </div>

          <Image
            src="/happyemoji.png"
            alt="happy"
            width={150}
            height={206}
            className="absolute left-0 bottom-16 hidden lg:block"
          />
          <Image
            src="/happyemoji.png"
            alt="happy"
            width={120}
            height={117}
            className="absolute left-0 block lg:hidden"
          />
        </div>

        <div className="absolute right-0 top-0 hidden lg:block">
          <Image src="/star.svg" alt="start" width={200} height={200} />
        </div>

        <div className="absolute -right-10 -top-10 block lg:hidden">
          <Image src="/star.svg" alt="start" width={169} height={169} />
        </div>

        <div className="order-1 lg:order-2">
          <h1 className="font-mochiy lg:text-[4.375rem] text-[2.81rem] text-center lg:text-start">
            Tokenomics
          </h1>

          <div className="space-y-[1.875rem] mt-10 lg:mt-16 px-6 lg:px-0">
            {tokenomics.map((t, idx) => (
              <div key={idx} className="flex gap-3">
                <Image
                  src="/semoji.png"
                  alt="semoji"
                  width={45}
                  height={45}
                  className="hidden lg:block"
                />
                <Image
                  src="/semoji.png"
                  alt="semoji"
                  width={45}
                  height={45}
                  className="block lg:hidden h-[45px] w-[45px]"
                />

                <div>
                  <p className="lg:text-[2rem] text-2xl font-mochiy">
                    {t.title}
                  </p>
                  <p className="font-monda text-2xl lg:text-[2.1rem] mt-3 lg:mt-6">
                    {t.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center mt-40 lg:mt-12 max-w-[48rem] mx-auto">
        <h3 className="text-[#81D951] font-monda text-2xl lg:text-4xl">
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
