import { HeartIcon } from "@heroicons/react/24/solid";
const currentYear = new Date().getFullYear(); // returns the current year

const Footer = () => (
  <footer className="container xl:max-w-screen-xl mx-auto p-6 mt-8 text-center">
    <p className="text-gray-500 hover:text-current">
      <a href="https://www.riefer.io" target="_blank" rel="noopener noreferrer">
        Made with{" "}
        <HeartIcon className="inline-block w-4 h-4 -mt-1 text-red-600 animate-pulse" />{" "}
        by riefer.io
      </a>{" "}
      &#169; Junkerri {currentYear}
    </p>
  </footer>
);

export default Footer;
