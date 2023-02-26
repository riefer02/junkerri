import Link from "next/link";
import { useShoppingCart } from "@/hooks/use-shopping-cart";
import { formatCurrency } from "@/lib/utils";
import { Logo } from "@/components/index";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import Hamburger from "./Hamburger";

const Header = () => {
  const { totalPrice, cartCount } = useShoppingCart();

  return (
    <header className="sticky top-0 bg-white z-10 shadow">
      <div className="container xl:max-w-screen-xl mx-auto p-4 flex justify-between">
        <Logo />
        <div className="flex items-center justify-end gap-4 md:gap-8">
          <nav className="hidden sm:block">
            <ul className="text-lg text-gray-700 flex gap-4">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </ul>
          </nav>
          <Link
            href="/cart"
            as={`/cart`}
            className="flex items-center space-x-1 text-gray-700 hover:text-gray-900"
          >
            <div className="relative">
              <ShoppingCartIcon className="w-7 h-7 flex-shrink-0" />
            </div>
            <div className="text-lg">
              {formatCurrency(totalPrice)}{" "}
              <span className="text-sm text-gray-500">({cartCount})</span>
            </div>
          </Link>
          <Hamburger />
        </div>
      </div>
    </header>
  );
};

export default Header;
