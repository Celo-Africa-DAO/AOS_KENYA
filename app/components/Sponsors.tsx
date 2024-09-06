import React from 'react'
import Section from './ui/Section'

export const Sponsors = () => {
          const brandSponsors = [
            { imageURL: "/img/celo.svg" },
            { imageURL: "/img/fonbnk.svg" },
            { imageURL: "/img/mento.svg" },
            { imageURL: "/img/opera.svg" },
          ];
  return (
    <div
      className="-mb-56 sm:-mb-0 p-40 text-white overflow-x-hidden bg-cover bg-center px-[1rem] md:px-[10rem]"
      style={{ backgroundImage: "url(img/schedule.png)" }}
    >
      <Section
        data-menuopened={true}
        className="!w-full"
        containerClassName="my-20 lg:my-0 lg:py-20 max-lg:p-5"
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
            {brandSponsors.map((item, index) => (
              <img
                key={index}
                src={item.imageURL}
                className="w-24 h-10 lg:w-40 lg:h-20"
              />
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
