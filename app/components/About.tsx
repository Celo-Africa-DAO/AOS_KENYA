import React from "react";
import { Button } from "./ui/button";
import Section from "./ui/Section";

const About = () => {
  return (
    <div
      id="about"
      className="-mb-[50px] sm:-mb-0  p-40 text-white overflow-x-hidden bg-cover bg-center px-[1rem] md:px-[10rem]"
      style={{ backgroundImage: "url(img/AOS.png)" }}
    >
      <Section
        data-menuopened={true}
        className="!w-full"
        containerClassName=" py-20 max-lg:p-5"
      >
        <h2 className="font-gt-alpina-trial text-4xl">
          <p className="!font-[250]">
            About<i> the Event</i>
          </p>
        </h2>
        <div className="flex flex-col lg:flex-row w-full">
          <div className="pb-10 lg:pb-0 pt-16">
            <p className="w-full lg:w-4/6 font-light text-sm">
              Celo Gather Africa is a vibrant and dynamic event designed to
              bring together innovators, entrepreneurs, developers, and thought
              leaders from across the world to explore and shape the future of
              decentralized finance (DeFi) on the Celo blockchain.{" "}
            </p>
            <Button className="text-black font-Inter mt-4 bg-Celo-AD-yellow px-10 py-2 hover:bg-Celo-AD-yellow rounded-3xl">
              <a href="mailto:daniel.kimotho@celo.org">Sponsor Us</a>
            </Button>
          </div>
          <img src="Map.png" alt="map" className="w-180  sm:h-60" />
        </div>
      </Section>
    </div>
  );
};

export default About;
