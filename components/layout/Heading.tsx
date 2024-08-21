import Image from "next/image";
import React from "react";

export const Heading = () => {
  return (
    <div className="flex justify-between items-center [&_span]:text-sm font-light mt-6 [&_span]:opacity-80">
      <div className="flex space-x-56">
        <span>Klijtberg 66-68</span>
        <span>8570 Ingooigem</span>
      </div>
      <div className="w-[40px] h-[40px] absolute left-1/2 -translate-x-1/2 opacity-35">
        <Image
          src={`/images/Logodark.png`}
          fill
          alt="logo"
          className="object-cover"
        />
      </div>
      <div className="flex space-x-40">
        <span>info@frederickdesmet.be</span>
        <span>+32 475 50 65 96</span>
      </div>
    </div>
  );
};
