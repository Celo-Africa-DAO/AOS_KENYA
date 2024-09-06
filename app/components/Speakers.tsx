import React from "react";
import Section from "./ui/Section";
import { title } from "process";

interface GalleryItemProps {
  name: string;
  title: string;
  imageUrl: string;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ name, title, imageUrl }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <img
        src={imageUrl}
        alt={name}
        className="rounded-lg w-full h-[380px] object-cover"
      />
      <h3 className="mt-4 font-normal text-base">{name}</h3>
      <p className="text-xs text-gray-600">{title}</p>
    </div>
  );
};

const Speakers: React.FC = () => {
  const items = [
    {
      name: "Umar",
      title: "Celo Africa",
      imageUrl: "/img/umar.jpg",
    },
    {
      name: " Joan",
      title: "Celo Europe DAO",
      imageUrl: "/img/jona.jpeg",
    },
    {
      name: " Isha V",
      title: "Celo Foundation",
      imageUrl: "/img/isha.jpg",
    },
    {
      name: "Duncan Muchangi",
      title: "Head of BD Fonbnk",
      imageUrl: "/img/ducan.jpeg",
    },
    {
      name: "George Mosomi",
      title: "--",
      imageUrl: "/img/you.jpeg",
    },
    {
      name: "Derrick Bundi",
      title: "Founder &CEO Pretium Finance",
      imageUrl: "/img/pretium.jpeg",
    },
    {
      name: "Abidemi Adenle",
      title: "Investment Analyst,KeppleAfrica Ventures",
      imageUrl: "/img/Abidemi.jpeg",
    },
    {
      name: "Markus Frank",
      title: "CEO mento labs",
      imageUrl: "/img/markus.webp",
    },
    {
      name: "Reuven Palatnik",
      title: "Credit collective ",
      imageUrl: "/img/colletive.jpeg",
    },
  ];

  return (
    <Section
      id="Speakers"
      data-menuopened={true}
      className="!w-full bg-[#efe8e0]"
      containerClassName="mb-0 pb-20 max-lg:p-5"
    >
      <h2 className="font-gt-alpina-trial text-4xl pb-10">
        <p className="!font-[250] italic">Speakers</p>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {items.map((item, index) => (
          <GalleryItem
            key={index}
            name={item.name}
            title={item.title}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    </Section>
  );
};

export default Speakers;
