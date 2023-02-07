import Link from "next/link";
import { useShoppingCart } from "@/hooks/use-shopping-cart";
import { formatCurrency } from "@/lib/utils";
import { Logo } from "@/components/index";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const { totalPrice, cartCount } = useShoppingCart();

  return (
    <header className="sticky top-0 bg-white z-10 shadow">
      <div className="container xl:max-w-screen-xl mx-auto p-4 flex justify-between">
        <Logo />
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
      </div>
    </header>
  );
};

export default Header;
