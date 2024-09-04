import React from "react";
import Section from "./ui/Section";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Footer = () => {
      const fakeArray = [
        { imageURL: "/img/celo.svg" },
        { imageURL: "/img/fonbnk.svg" },
        { imageURL: "/img/mento.svg" },
        { imageURL: "/img/opera.svg" },
      ];
  return (
    <Section
      data-menuopened={true}
      className="!w-full"
      containerClassName="py-0 my-20 lg:my-0 lg:py-20 max-lg:p-5 bg-[#efe8e0]"
    >
      <div className="lg:!mb-10">
        <h2
          id="Sponsors"
          className="font-gt-alpina-trial text-4xl pt-20 lg:pt-0 pb-10"
        >
          <p className="!font-[250]">
            <i>Event Sponsors</i>
          </p>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {fakeArray.map((item, index) => (
            <img key={index} src={item.imageURL} className="w-24 h-10 lg:w-40 lg:h-20" />
          ))}
        </div>
      </div>
      {/* <h2 className="font-gt-alpina-trial text-4xl pb-10 text-center">
        <p className="!font-[250]">Get more insight and updates</p>
      </h2>
      <div className="flex justify-center">
        <div className=" border-gray-400 border flex justify-between rounded-full mt-3 sm:w-2/8">
          <input
            type="text"
            placeholder="Email"
            className="palceholder:text-white ml-2 border-none bg-transparent focus:outline-none w-48 p-3"
          />
          <IoIosArrowDroprightCircle
            className="bg-black rounded-full cursor-pointer"
            color="yellow"
            size={50}
          />
        </div>
      </div> */}
    </Section>
  );
};

export default Footer;
