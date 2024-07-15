import React from "react";
import Image from "next/image";
// const buy = [
//   { img: "/visit.svg", name: "Visit Uniswap" },
//   { img: "/connect.svg", name: "Connect your wallet" },
//   { img: "", name: "Swap ETH for OG Pepe" },
// ];

const HowToBuy = () => {
  return (
    <div className="bg-green text-white pt-20 relative">
      <div className="absolute -top-60 hidden lg:block">
        <Image src="/how.svg" alt="how" width={250} height={250} />
      </div>

      <div className="absolute -top-8 block lg:hidden">
        <Image src="/how.svg" alt="how" width={100} height={100} />
      </div>

      <div className="text-center">
        <h1 className="font-mochiy lg:text-[4.375rem] text-[2.81rem] text-center">
          How to buy
        </h1>
        <p className="font-monda lg:text-[1.75rem] text-2xl mt-7 max-w-[30rem] mx-auto px-6 lg:px-0">
          Ready to join the revolution? Buying OG Pepe is simple:
        </p>
      </div>

      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-y-10 lg:gap-4 lg:px-[6rem] mt-16 px-6">
        <div className="bg-custom-gradient px-5 py-5 rounded-[16px] border border-[#3ED5DD] border-opacity-30">
          <div className="bg-[#D3F0DD] py-8 flex justify-center rounded-[16px]">
            <Image src="/visit.svg" alt="visit" width={116} height={116} />
          </div>

          <h1 className="text-center font-mochiy text-2xl my-[4.37rem]">
            Visit Uniswap
          </h1>
        </div>

        <div className="bg-custom-gradient px-5 py-5 rounded-[16px] border border-[#3ED5DD] border-opacity-30">
          <div className="bg-[#D3F0DD] py-8 flex justify-center rounded-[16px]">
            <Image src="/visit.svg" alt="visit" width={116} height={116} />
          </div>

          <h1 className="text-center font-mochiy text-2xl my-[4.37rem]">
            Visit Uniswap
          </h1>
        </div>

        <div className="bg-custom-gradient px-5 py-5 rounded-[16px] border border-[#3ED5DD] border-opacity-30">
          <div className="bg-[#D3F0DD] py-8 flex justify-center rounded-[16px]">
            <Image src="/visit.svg" alt="visit" width={116} height={116} />
          </div>

          <h1 className="text-center font-mochiy text-2xl my-[4.37rem]">
            Visit Uniswap
          </h1>
        </div>
      </div>

      <div className="text-center mt-12">
        <h3 className="text-[#81D951] font-monda text-2xl lg:text-4xl">
          For a detailed guide
        </h3>

        <button className="font-monda bg-[#66974C] px-8 py-4 mt-6 rounded-[12px] text-[1.75rem]">
          Click Here
        </button>
      </div>

      <div className="absolute -bottom-16 z-10 -left-[3rem] hidden lg:block">
        <Image src="/palm.svg" alt="palm" width={227} height={221} />
      </div>

      <div className="absolute -bottom-10 z-10 -left-[3rem] block lg:hidden">
        <Image src="/palm.svg" alt="palm" width={175} height={146} />
      </div>
    </div>
  );
};

export default HowToBuy;
