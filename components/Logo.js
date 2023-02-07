import Link from "next/link";
import Image from "next/image";

const logoPixels = 80;

const Logo = () => (
  <Link href="/" className="flex items-center space-x-2">
    <Image
      src="/junkerri-logo.svg"
      alt="Logo"
      width={logoPixels}
      height={logoPixels}
    />
    <span className="hidden sm:inline-block font-extrabold text-3xl text-gray-700">
      Junkerri Art
    </span>
  </Link>
);

export default Logo;
