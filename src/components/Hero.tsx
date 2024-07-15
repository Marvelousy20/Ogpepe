import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-green font-mochiy text-white pt-16 lg:pt-[6.8rem] pb-6 relative overflow-hidden">
      <div className="max-w-[55rem] text-center mx-auto relative">
        <h1 className="lg:text-[4.375rem] leading-[36.2px] lg:leading-[101px] text-2xl max-w-[19rem] lg:max-w-full mx-auto">
          Unleashing the Power of Memecoins
        </h1>

        <p className="font-monda lg:max-w-[32rem] mx-auto mt-7 lg:mt-9 text-[0.75rem] lg:text-[1.875rem] max-w-[12.75rem]">
          Embrace the Legacy of the Original Pepe on the Blockchain
        </p>

        <div className="absolute top-8 -right-32 hidden lg:block">
          <Image src="/emoji.svg" alt="svg" width={360} height={359} />
        </div>

        <div className="absolute top-5 right-12 block lg:hidden">
          <Image src="/emoji.svg" alt="svg" width={80} height={90} />
        </div>

        <div className="absolute top-0  left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Image src="/eclipse.svg" alt="eclpise" width={382} height={274} />
        </div>

        <div className="hidden lg:block">
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

        <div className="block lg:hidden">
          <div className="flex items-center gap-x-6 mt-[4.44rem] justify-center">
            <a href="">
              <Image src="/x.svg" alt="x" width={34} height={34} />
            </a>

            <a href="">
              <Image src="/telegram.svg" alt="x" width={34} height={34} />
            </a>

            <a href="">
              <Image src="/medium.svg" alt="x" width={34} height={34} />
            </a>

            <a href="">
              <Image src="/github.svg" alt="x" width={34} height={34} />
            </a>
          </div>
          <div className="h-[0.5px] max-w-[238px] mx-auto bg-white mt-2 opacity-[39%]"></div>
        </div>

        <button className="bg-[#66974C] font-monda py-3 lg:py-5 lg:px-14 px-7 rounded-[10px] mt-5 lg:mt-6 text-2xl lg:text-[1.875rem]">
          Age: 1368d 23h 23m 53s
        </button>
      </div>

      <div className="absolute -bottom-16 -right-20 hidden lg:block">
        <Image src="/star.svg" alt="264" width={264} height={264} />
      </div>

      <div className="absolute top-1/2 hidden lg:block">
        <Image src="/palm.svg" alt="palm" width={337} height={281} />
      </div>

      <div className="absolute top-36 -left-6 block lg:hidden">
        <Image src="/palm.svg" alt="palm" width={119} height={99} />
      </div>
    </div>
  );
};

export default Hero;
