import React from "react";
import Link from "next/link";
import { useLockBodyScroll } from "@/hooks/use-lock-body-scroll";
import Hamburger from "./Hamburger";

const navLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Cart",
    href: "/cart",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function MobileNav() {
  useLockBodyScroll();

  return (
    <div className="grid grid-rows-6 w-full fixed h-[100dvh] min-h-[100%] bottom-0 left-0 z-10  bg-white transition ease-linear px-4 pt-[40px]">
      <div className="ml-auto">
        <Hamburger />
      </div>
      <nav className="row-start-2">
        <ul className="text-3xl text-gray-700 flex items-center flex-col justify-center h-full gap-8">
          {navLinks.map((link, index) => (
            <Link key={index} href={link.href}>
              {link.label}
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
}
