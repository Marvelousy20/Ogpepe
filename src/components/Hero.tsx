import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-green font-mochiy text-white pt-[6.8rem] pb-6 relative overflow-hidden">
      <div className="max-w-[55rem] text-center mx-auto relative">
        <h1 className="text-[4.375rem] leading-[101px]">
          Unleashing the Power of Memecoins
        </h1>

        <p className="font-monda max-w-[32rem] mx-auto mt-9 text-[1.875rem]">
          Embrace the Legacy of the Original Pepe on the Blockchain
        </p>

        <div className="absolute top-8 -right-32">
          <Image src="/emoji.svg" alt="svg" width={360} height={359} />
        </div>

        <div className="absolute top-0  left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Image src="/eclipse.svg" alt="eclpise" width={382} height={274} />
        </div>

        <div>
          <div className="flex items-center gap-x-10 mt-[4.44rem] justify-center">
            <a href="">
              <Image src="/x.svg" alt="x" width={63} height={63} />
            </a>

            <a href="">
              <Image src="/telegram.svg" alt="x" width={62} height={63} />
            </a>

            <a href="">
              <Image src="/medium.svg" alt="x" width={62} height={63} />
            </a>

            <a href="">
              <Image src="/github.svg" alt="x" width={62} height={63} />
            </a>
          </div>
          <div className="h-[0.5px] max-w-[380px] mx-auto bg-white mt-2 opacity-[39%]"></div>
        </div>

        <button className="bg-[#66974C] font-monda py-5 px-14 rounded-[10px] mt-6 text-[1.875rem]">
          Age: 1368d 23h 23m 53s
        </button>
      </div>

      <div className="absolute -bottom-16 -right-20">
        <Image src="/star.svg" alt="264" width={264} height={264} />
      </div>

      <div className="absolute top-1/2">
        <Image src="/palm.svg" alt="palm" width={337} height={281} />
      </div>
    </div>
  );
};

export default Hero;
