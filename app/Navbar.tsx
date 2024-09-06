"use client";
import { Button } from "./components/ui/button";
import { HiOutlineX, HiMenu } from "react-icons/hi";
import { Inter } from "next/font/google";
import Section from "./components/ui/Section";
import Link from "next/link";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export type HeaderLink = {
  to: string;
  text: string;
}[];

type NavigationProps = {
  links: HeaderLink;
  isMenuOpen: boolean;
  setIsMenuOpen: any | ReactNode;
};

export default function Navigation({
  links,
  isMenuOpen,
  setIsMenuOpen,
}: NavigationProps) {
  console.log(isMenuOpen);

  return (
    <Section
      data-menuopened={isMenuOpen}
      className="!w-full bg-[#F8F5F380] shadow-md"
      containerClassName="flex justify-between items-center py-5 max-lg:p-5"
    >
      <Link href="/">
        <img src="gather.svg" alt="logo" className="w-40 lg:w-auto " />
      </Link>
      <div className="flex items-center gap-3 text-[#000000]">
        <div className="relative px-2 hidden lg:flex">
          <div className="flex items-center gap-4 pb-2">
            {links?.map((link) => (
              <Link
                key={link.to}
                href={link.to}
                className="font-light font-inter text-base flex items-center hover:underline gap-1 relative after:absolute"
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
        <Button className="hidden text-black lg:block font-Inter bg-Celo-AD-yellow px-10 hover:bg-Celo-AD-yellow rounded-3xl">
          <a
            href={"https://lu.ma/calendar/cal-SiR9cdTHKv60Ffa"}
            target="_blank"
          >
            Sign-Up
          </a>
        </Button>

        <button
          className="lg:hidden p-2"
          onClick={() => setIsMenuOpen((isMenuOpen: any) => !isMenuOpen)}
        >
          {isMenuOpen ? (
            <img
              src="menu-icon.svg"
              data-menuopened={isMenuOpen}
              className="w-14 h-14 "
            />
          ) : (
            <HiOutlineX className="w-6 h-6" />
          )}
        </button>
      </div>
    </Section>
  );
}
