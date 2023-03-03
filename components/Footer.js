import { HeartIcon } from "@heroicons/react/24/solid";
import { FaInstagram } from "react-icons/fa";
const currentYear = new Date().getFullYear(); // returns the current year

const Footer = () => (
  <footer className="container xl:max-w-screen-xl mx-auto p-6 mt-8 text-center">
    <div className="flex items-center justify-center mx-auto w-full pb-4">
      <a
        href="https://www.instagram.com/junkerri/"
        target="_blank"
        aria-label="instagram link for Kunkerri Art"
        className="mx-auto"
      >
        <FaInstagram className="text-3xl text-rose-500" />
      </a>
    </div>
    <p className="text-gray-500 hover:text-current">
      <a
        href="https://www.instagram.com/riefer02/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Made with{" "}
        <HeartIcon className="inline-block w-4 h-4 -mt-1 text-red-600 animate-pulse" />{" "}
        by riefer.io
      </a>{" "}
      &#169; Junkerri {currentYear}
    </p>
  </footer>
);

export default Footer;
