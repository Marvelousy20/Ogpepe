import React from "react";
import Image from "next/image";

const Roadmap = () => {
  return (
    <div className="bg-green text-white pt-10 lg:pt-[7.625rem] pb-20 lg:pb-[14rem] relative overflow-hidden">
      <div>
        <h1 className="lg:text-[4.375rem] text-[2.81rem] font-mochiy text-center">
          Roadmap
        </h1>
        <p className="lg:text-[2.125rem] text-center max-w-[59rem] mx-auto mt-6 lg:mt-[6.8rem] leading-[27.69px] lg:leading-[55.38px] px-10 lg:px-0">
          Our journey is just beginning. From revitalizing our website to
          expanding our Telegram with multi-lingual support, we&apos;re gearing
          up for an unforgettable DeFi summer.
        </p>

        <p className="text-[#7DD84C] font-monda mt-[10rem] lg:mt-[5.5rem] lg:text-[2rem] max-w-[46rem] text-center mx-auto px-8 lg:px-0">
          Stay tuned for updates on partnerships, audits, and the full
          re-ignition of our ecosystem.
        </p>
      </div>

      <div className="absolute top-6 -left-24 hidden lg:block">
        <Image src="/flr.svg" alt="flower right" width={401} height={277} />
      </div>

      <div className="absolute top-8 -left-8 block lg:hidden">
        <Image src="/flr.svg" alt="flower right" width={127} height={101} />
      </div>

      <div className="absolute top-60 block -left-6 lg:hidden">
        <Image
          src="/rdel.png"
          alt="rdel"
          width={162}
          height={162}
          className="top-0 right-0"
        />
      </div>

      <div className="absolute bottom-0 hidden lg:block">
        <div className="relative">
          <Image src="/rrec.png" alt="rrec" width={305} height={335} />

          <Image
            src="/rdel.png"
            alt="rdel"
            width={300}
            height={300}
            className="absolute top-20 -right-20"
          />
        </div>
      </div>

      <div className="absolute bottom-0 right-0 hidden lg:block">
        <Image src="/flr.svg" alt="flower right" width={401} height={277} />
      </div>

      <div className="absolute top-24 -right-2 block lg:hidden">
        <Image src="/flr.svg" alt="flower right" width={127} height={101} />
      </div>

      <div className="relative">
        <div className="absolute bottom-0 right-0 hidden lg:block">
          <Image
            src="/rdecont.svg"
            alt="rde"
            width={250}
            height={300}
            className="relative"
          />
          <div className="absolute top-[5.9rem] right-0">
            <Image
              src="/rde.svg"
              alt="rde second image"
              width={300}
              height={300}
            />
          </div>
        </div>

        <div className="absolute bottom-16 right-0 block lg:hidden">
          <Image
            src="/rdecont.svg"
            alt="rde"
            width={100}
            height={213}
            className="relative"
          />
          <div className="absolute top-[2.3rem] right-0">
            <Image
              src="/rde.svg"
              alt="rde second image"
              width={170}
              height={152}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
