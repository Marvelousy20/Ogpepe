import React from "react";
import Image from "next/image";

const Roadmap = () => {
  return (
    <div className="bg-green text-white pt-[7.625rem] pb-[14rem] relative">
      <div>
        <h1 className="text-[4.375rem] font-mochiy text-center">Roadmap</h1>
        <p className="text-[2.125rem] text-center max-w-[59rem] mx-auto mt-[6.8rem]">
          Our journey is just beginning. From revitalizing our website to
          expanding our Telegram with multi-lingual support, we&apos;re gearing
          up for an unforgettable DeFi summer.
        </p>

        <p className="text-[#7DD84C] font-monda mt-[5.5rem] text-[2rem] max-w-[46rem] text-center mx-auto">
          Stay tuned for updates on partnerships, audits, and the full
          re-ignition of our ecosystem.
        </p>
      </div>

      <div className="absolute top-6 -left-24">
        <Image src="/flr.svg" alt="flower right" width={401} height={277} />
      </div>

      <div className="absolute bottom-0">
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

      <div className="absolute bottom-0 right-0">
        <Image src="/flr.svg" alt="flower right" width={401} height={277} />
      </div>

      <div className="relative">
        <div className="absolute bottom-0 right-0">
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
      </div>
    </div>
  );
};

export default Roadmap;
