import React from "react";
import Section from "./ui/Section";

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
        className="rounded-lg w-full h-auto object-cover"
      />
      <h3 className="mt-4 font-semibold text-lg">{name}</h3>
      <p className="text-sm text-gray-600">{title}</p>
    </div>
  );
};

const Speakers: React.FC = () => {
  const items = [
    {
      name: "Duncan Muchangi",
      title: "Head of BD, Fonbuk",
      imageUrl: "/img/duncan.png",
    },
    {
      name: "Trevor Kimani",
      title: "CEO And Co-Founder AlphabioQ",
      imageUrl: "/img/trevor.png",
    },
    {
      name: "S. A. Kakai",
      title: "Crypto Regulation Expert",
      imageUrl: "/img/kakai.png",
    },
    {
      name: "Jovan Mwesigwa",
      title: "Founder Oneramp",
      imageUrl: "/img/jova.png",
    },
    {
      name: "Eliash Ezron",
      title: "Co-Founder Shukuru",
      imageUrl: "/img/Herzron.png",
    },
    {
      name: "James Mugambi",
      title: "COO And Co-Founder Of Hurupay",
      imageUrl: "/img/james.png",
    },
    {
      name: "Adelapo Adeagbo",
      title: "CEO And Co-Founder Bitgifty",
      imageUrl: "/img/ado.png",
    },
    {
      name: "Joshua C. Tebepina",
      title: "Co-Founder Bingtelier",
      imageUrl: "/img/joshua.png",
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
        <p className="!font-[250]">Speakers</p>
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
