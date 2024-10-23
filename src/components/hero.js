import { ChevronRight } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full">
      <img className="w-full" src="/Rectangle 1.png" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center md:gap-2">
        <img src="/logomeubel.png" className="w-6 md:w-12" />
        <div className="text-lg md:text-4xl font-poppins font-a">Cart</div>
        <div className="flex items-center justify-center gap-0.5">
          <div className="font-semibold text-xs md:text-base">Home</div>
          <ChevronRight className="size-4 mt-0.5" />
          <div className="text-xs md:text-base">Cart</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
