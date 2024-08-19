"use client";
import Image from "next/image";
import Navbar from "./Navbar";
import { useState } from "react";
import SideMenu from "./components/SideMenu";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { to: "/", text: "About" },
    {
      to: "/",
      text: "Sponsors",
    },
    { to: "/", text: "Speakers" },
    { to: "/", text: "Schedule" },
  ];

  console.log(isMenuOpen);
  
  return (
    <>
      <Navbar
        links={links}
        isMenuOpen={!isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <SideMenu isMenuOpen={isMenuOpen} links={links} />
    </>
  );
}
