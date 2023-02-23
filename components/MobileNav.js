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
];

export default function MobileNav() {
  useLockBodyScroll();

  return (
    <div className="grid grid-rows-6 w-full h-screen bg-white transition ease-linear absolute top-0 left-0 z-10 p-4">
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
