import React from "react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="relative flex flex-col lg:flex-row justify-between items-center lg:gap-40 p-6 bg-[#efe8e0]">
      <div className="flex flex-col w-full lg:w-2/4 items-center lg:items-start">
        {/* Background images */}
        <img
          src="coner-h.png"
          alt="Corner Design"
          className="w-48 absolute top-0 left-0"
        />
        <div className="flex flex-col pt-44 lg:pt-20 w-full lg:ml-[150px] text-center lg:text-left">
          <img
            src="hero.svg"
            alt="Gather Logo"
            className="w-100 h-[14rem] mx-auto lg:mx-0"
          />
          <p className="text-base  md:text-xl text-gray-600 mb-8 mt-0 lg:mt-4">
            Scaling Web3 adoption and Future in Africa.
          </p>
          <div className="flex gap-6 justify-center lg:justify-start">
            <Button className="text-black font-Inter mt-4 bg-Celo-AD-yellow px-10 py-2 hover:bg-Celo-AD-yellow rounded-3xl">
              View Deck
            </Button>
            <Button className="text-black font-Inter mt-4 bg-Celo-AD-yellow px-10 py-2 hover:bg-Celo-AD-yellow rounded-3xl">
              Sponsor Us
            </Button>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-2/4 mt-10 lg:mt-0 flex justify-center lg:justify-end">
        <img
          src="hero-r.png"
          alt="Community Image"
          className="w-full lg:w-3/4"
        />
      </div>
    </div>
  );
};

export default Hero;
