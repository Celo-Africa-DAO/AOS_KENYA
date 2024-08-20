import React from "react";
import Section from "./ui/Section";
import { Button } from "./ui/button";

const why = () => {
    const fakeArray = Array(4).fill(null);
  return (
    <div
      className="p-40 text-white overflow-x-hidden bg-cover bg-center px-[1rem] md:px-[10rem]"
      style={{ backgroundImage: "url(img/AOS.png)" }}
    >
      <Section
        data-menuopened={true}
        className="!w-full"
        containerClassName="my-20 lg:my-0 lg:py-20 max-lg:p-5"
      >
        <h2 className="font-gt-alpina-trial text-4xl">
          <p className="!font-[250]">
            <i>Why Sponsorship?</i>
          </p>
        </h2>
        <div className="flex flex-col lg:flex-row w-full">
          <div className="pt-10 pb-10 lg:pb-0">
            <p className="w-full lg:w-4/6 font-light text-sm">
              Sponsoring Celo Gather Africa is an unparalleled opportunity to
              align your brand with the forefront of blockchain innovation in
              Africa. For sponsorship opportunities:
            </p>
            <Button className="hidden text-black lg:block font-Inter mt-10 bg-Celo-AD-yellow px-10 hover:bg-Celo-AD-yellow rounded-3xl">
              View Deck
            </Button>
          </div>
          <img
            src="mukude.png"
            alt="map"
            className="w-auto sm:w-180 h-auto sm:h-60"
          />
        </div>
        <div>
          <h2
            id="Sponsors"
            className="font-gt-alpina-trial text-4xl pt-20 lg:pt-0 pb-10"
          >
            <p className="!font-[250]">
              <i>Event Sponsors</i>
            </p>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {fakeArray.map((_, index) => (
              <div
                key={index}
                className="border-[#E4E4CF] border p-4 rounded shadow-md"
              >
                <p className="text-gray-600 p-10"></p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default why;
