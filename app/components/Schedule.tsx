import React from "react";
import Section from "./ui/Section";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "./ui/accordion";
// import VelixEclips from "./ui/aos/icons/VelixEclips";
// import GradientBorder from "./ui/aos/GradientBorder";

const FAQs = [
  {
    duration: "5:00 PM - 5:15 PM",
    activity: "State Of Celo in Africa",
    keyperson: "Celo Africa : Umar ",
  },
  {
    duration: "5:15 PM - 5:30 PM",
    activity: <span>Celo Metrics</span>,
    keyperson: "Celo Europe:Joan",
  },
  {
    duration: "5:30 PM - 5:45 PM ",
    activity: "Celo leading real world solutions where it matters",
    keyperson: "Celo Foundation : Isha",
  },
  {
    duration: "5:45 PM - 6:15 PM",
    activity: "cKES Panel",
    keyperson: "Jessica, Marcus, Dekan",
  },
  {
    duration: "6:20 PM - 6:35PM",
    activity: "Market Potential in Africa",
    keyperson: "Reuven  Palatnik",
  },
  // ----
  {
    duration: "6:35 PM - 6:50 PM",
    activity: "Market Potential in Africa",
    keyperson: " Alex Witt/Abidemi",
  },
  {
    duration: "7:00 PM - 7:45 PM",
    activity: "Builders Panel ",
    keyperson: "George, Duncan,  Bashir, Bundi",
  },
  {
    duration: "7:45 PM - 8:00 PM",
    activity: "real-world utility/Driving mass adoption in Africa",
    keyperson: "Marcus Franke",
  },
  {
    duration: "8:00 PM - 8:10PM",
    activity: "Minipay at 1",
    keyperson: "Tosin O",
  },
  {
    duration: "8:15 PM -  8:45PM",
    activity: "Role of Stablecoins in Africa's financial ecosystem ",
    keyperson: "Angelo, Markus, Alex, Tosin Mod:Chidubem",
  },
  {
    duration: "8:45 PM - 10:00 PM",
    activity: "Networking and Meal",
    keyperson: "Charles/Ronald",
  },
];

const Schedule = () => {
  
  return (
    <Section
      data-menuopened={true}
      className="!w-full"
      containerClassName="flex flex-col justify-between items-center pt-5 max-lg:p-5"
    >
      <div className="flex flex-col justify-center items-center pt-40 lg:pt-0 mb-10">
        <h2 className="font-gt-alpina text-4xl">
          <p className="!font-[250] italic">Schedule celo gather</p>
        </h2>
        <p className="text-velix-gray mt-2 text-center font-gt-alpina-trial italic">
          Get updated on our schedule
        </p>
      </div>
      <iframe
        src={
          "https://docs.google.com/spreadsheets/d/1X_w2EFfX1r6SYTY_BYKCJj2wEiJVn6tbL9mwI8szPJc/edit?gid=0#gid=0"
        }
        className="w-full lg:w-[90%] h-[600px] rounded-md"
        title="utu social connector"
      />
      {/* <div className="relative p-0.25  w-full">
        <GradientBorder className="rounded-lg" />
        <VelixEclips className="absolute -top-20 -translate-x-1/2 left-1/2 max-lg:w-52 max-lg:h-52 max-lg:rotate-45" />
        <div className="bg-velix-slate-blue dark:bg-velix-black p-5 lg:p-16 rounded-lg grid grid-cols-1 gap-5 justify-start items-startn relative">
          {FAQs.map((faq, index) => {
            return (
              <Accordion
                key={`velix-faq-${index}`}
                type="single"
                className="bg-white dark:bg-velix-slate-blue px-5 lg:px-10 py-3 rounded-lg font-space-grotesk text-[#54616B] dark:"
                collapsible
              >
                <AccordionItem value={faq.duration}>
                  <AccordionTrigger className="no-underline hover:no-underline text-base font-bold text-start">
                    {faq.duration}
                  </AccordionTrigger>
                  <AccordionContent className="text-base dark:text-[#A4A5A7]">
                    {faq.activity}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            );
          })}
        </div>
      </div> */}
    </Section>
  );
};

export default Schedule;
