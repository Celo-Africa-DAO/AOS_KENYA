import React from "react";
import Section from "./ui/Section";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Footer = () => {
  return (
    <Section
      data-menuopened={true}
      className="!w-full"
      containerClassName=" my-20 lg:my-0 lg:py-20 max-lg:p-5 bg-[#efe8e0]"
    >
      <h2 className="font-gt-alpina-trial text-4xl pb-10 text-center">
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
      </div>

    </Section>
  );
};

export default Footer;
