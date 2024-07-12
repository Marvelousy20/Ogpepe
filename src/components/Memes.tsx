import React from "react";
import Image from "next/image";

function Memes() {
  return (
    <div className="bg-[#66974C] text-white py-[4.5rem] px-[6rem]">
      <div className="flex justify-between">
        <div className="w-1/2">
          <h1 className="font-mochiy text-[4.375rem]">Memes</h1>

          <p className="font-monda text-[1.75rem] mt-[3.6rem]">
            Dive into the heart of OG Pepe with our collection of memes.
            Celebrate the humor, creativity, and spirit of our community.
          </p>

          <button className="font-modal bg-[#20672C] text-[1.75rem] mt-[3.6rem] px-8 py-4 rounded-[12px]">
            Check out the latest
          </button>
        </div>

        <div className="w-1/2 flex justify-end">
          <Image src="/memes.svg" alt="image" width={534} height={614} />
        </div>
      </div>
    </div>
  );
}

export default Memes;
