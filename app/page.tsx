"use client";
import Image from "next/image";
import Navbar from "./Navbar";
import { useState } from "react";
import SideMenu from "./components/SideMenu";
import About from "./components/About";
import Speakers from "./components/Speakers";
import Schedule from "./components/Schedule";
import Why from "./components/why";
import Footer from "./components/Footer";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { to: "#sbout", text: "About" },
    {
      to: "#Sponsors",
      text: "Sponsors",
    },
    { to: "#Speakers", text: "Speakers" },
    { to: "#Schedule", text: "Schedule" },
  ];

  console.log(isMenuOpen);

  return (
    <div className="bg-[#efe8e0]">
      <Navbar
        links={links}
        isMenuOpen={!isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <SideMenu isMenuOpen={isMenuOpen} links={links} />
      <About />
      <Speakers />
      <Schedule />
      <Why />
      <Footer />
      <hr className="text-black bg-black p-[0.5px]" />
      <div className=" pb-4 flex items-center justify-center w-full">
        <img src="dao.svg" alt="Celo AfricaDAO" className="h-10 mx-auto mt-1" />
      </div>
    </div>
  );
}
