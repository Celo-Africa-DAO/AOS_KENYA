import React from "react";
import { Button } from "./ui/button";
import Section from "./ui/Section";

const Hero = () => {
  return (
    <Section
      className="!w-full lg:py-10   px-[1rem] md:px-[10rem]"
      containerClassName="flex flex-col lg:flex-row justify-between items-center py-5 max-lg:p-5"
    >
      <div className=" lg:pt-10">
        <img
          src="/img/hero.svg"
          alt="Gather Logo"
          className="w-[80%] md:w-[68%] h-[14rem] mx-auto lg:mx-0"
        />
        <p className="text-sm  md:text-xl text-gray-600 text-center md:text-left font-gt-alpina-trial italic mt-[-50px] lg:mt-[-30px]">
          Scaling Web3 adoption and Future in Africa.
        </p>
        <div className="flex gap-6 justify-center lg:justify-start">
          <Button className="text-black font-Inter mt-4 bg-Celo-AD-yellow px-10 py-2 hover:bg-Celo-AD-yellow rounded-3xl">
            <a href="celo gather Africa.pdf" target="_blank">
              View Deck
            </a>
          </Button>
          <Button className="text-black font-Inter mt-4 bg-Celo-AD-yellow px-10 py-2 hover:bg-Celo-AD-yellow rounded-3xl">
            <a
              href={"https://lu.ma/calendar/cal-SiR9cdTHKv60Ffa"}
              target="_blank"
            >
              Sign-Up
            </a>
          </Button>
        </div>
      </div>
      <div className="w-full lg:w-2/4 mt-10 lg:mt-0 flex justify-center order-first md:order-2">
        <img
          src="/img/kiliffi.jpeg"
          alt="Community Image"
          className=" w-full lg:w-3/4 rounded-custom-radius"
        />
      </div>
    </Section>
  );
};

export default Hero;
