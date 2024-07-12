import React from "react";
import Image from "next/image";

const Question = () => {
  return (
    <div className="bg-[#66974C] flex justify-center text-white text-center pt-[3.6875rem] relative pb-24">
      <div className="absolute left-0 -top-28">
        <Image src="/lemon.png" alt="lemon" width={200} height={200} />
      </div>

      <div>
        <p className="font-monda text-[1.687rem]">Contact Us</p>

        <h1 className="font-mochiy lg:text-[4.375rem]">Got questions?</h1>

        <p className="text-[2.1875rem] mt-6">
          We&apos;d love to hear from you.
        </p>

        <div className="font-monda text-[2.187rem] flex items-center gap-4 justify-center mt-10">
          <p>Reach out to us on:</p>
          <Image src="/telegram.svg" alt="telegram" width={49} height={49} />
          <Image src="/x.svg" alt="telegram" width={49} height={49} />
        </div>

        <p className="font-monda text-[2.187rem] mt-2">
          for direct support and community engagement.
        </p>
      </div>

      <div className="absolute right-0 bottom-0">
        <Image src="/palm2.png" alt="palm2" width={150} height={150} />
      </div>
    </div>
  );
};

export default Question;
