import { HeaderLink } from "../Navbar";
import Link from "next/link";

type SideMenuProps = {
  links: HeaderLink;
  isMenuOpen: boolean;
};

export default function SideMenu({ isMenuOpen, links }: SideMenuProps) {
  return (
    <div
      data-menuopened={isMenuOpen}
      className="fixed lg:hidden top-16 right-0 bottom-0 h-screen w-full transition-transform duration-300 z-50 flex flex-col ease-in-out text-black bg-white data-[menuopened=true]:translate-x-0 data-[menuopened=false]:translate-x-full"
    >
      <div className="flex flex-col flex-grow overflow-hidden scrollbar-hidden">
        {links.map((link: any) => (
          <Link
            key={link.to}
            href={link.to}
            target="_blank"
            className={`!font-light text-base relative p-7 after:absolute after:bottom-[-2px] after:left-[-1px] after:w-[calc(100%+2px)] after:h-[1px] ${
              link.text === "VePoints"
                ? "after:bg-transparent"
                : "after:bg-neutral-400 after:opacity-30 dark:after:bg-neutral-600"
            }`}
          >
            {link.text}
          </Link>
        ))}
      </div>
      <div className="flex flex-col justify-end flex-grow mb-20">
        <div className=" =!font-normal relative text-black ">
          <div className="absolute top-[-3.5rem] left-0 w-full h-[1px] bg-neutral-700 opacity-30 dark:bg-black transition-opacity duration-300" />
          <div className="p-6 mt-[-3rem] !text-base">
            © 2023 - {new Date().getFullYear()} AOS
          </div>
        </div>
      </div>
    </div>
  );
}
