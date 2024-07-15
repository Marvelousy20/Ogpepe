import React from "react";
import Image from "next/image";

function Memes() {
  return (
    <div className="bg-[#66974C] text-white py-9 lg:py-[4.5rem] lg:px-[6rem] px-10">
      <div className="lg:flex justify-between grid lg:grid-cols-2 grid-cols-1 gap-y-8">
        <div className="lg:w-1/2">
          <h1 className="font-mochiy lg:text-[4.375rem] text-[2.81rem]">
            Memes
          </h1>

          <p className="font-monda lg:text-[1.75rem] mt-4 lg:mt-[3.6rem]">
            Dive into the heart of OG Pepe with our collection of memes.
            Celebrate the humor, creativity, and spirit of our community.
          </p>

          <button className="font-modal bg-[#20672C] text-[1.75rem] mt-8 lg:mt-[3.6rem] px-8 py-4 rounded-[12px]">
            Check out the latest
          </button>
        </div>

        <div className="lg:w-1/2 flex justify-end">
          <Image src="/memes.svg" alt="image" width={534} height={614} />
        </div>
      </div>
    </div>
  );
}

export default Memes;
