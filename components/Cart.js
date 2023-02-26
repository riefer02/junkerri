import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { useShoppingCart } from "@/hooks/use-shopping-cart";
import axios from "axios";
import { formatCurrency } from "@/lib/utils";
import getStripe from "@/lib/get-stripe";
import {
  XCircleIcon,
  XMarkIcon,
  MinusSmallIcon,
  PlusSmallIcon,
} from "@heroicons/react/24/solid";
import { blurPlaceholderImg } from "@/lib/placeholder";
import { smallImage } from "@/lib/images";

const Cart = () => {
  const { cartDetails, totalPrice, cartCount, addItem, removeItem, clearCart } =
    useShoppingCart();
  const [redirecting, setRedirecting] = useState(false);

  const redirectToCheckout = async () => {
    // Create Stripe checkout
    const {
      data: { id },
    } = await axios.post("/api/checkout_sessions", {
      items: Object.entries(cartDetails).map(([_, { id, quantity }]) => ({
        price: id,
        quantity,
      })),
    });
    // Redirect to checkout
    const stripe = await getStripe();
    await stripe.redirectToCheckout({ sessionId: id });
  };

  return (
    <>
      <Head>
        <title>My Shopping Cart | Junkerri</title>
      </Head>
      <div className="container xl:max-w-screen-xl mx-auto py-12 px-4 sm:px-6">
        {cartCount > 0 ? (
          <>
            <h2 className="text-4xl font-semibold">Your shopping cart</h2>
            <p className="mt-1 text-xl">
              {cartCount} items{" "}
              <button
                onClick={clearCart}
                className="opacity-50 hover:opacity-100 text-base capitalize"
              >
                (Clear all)
              </button>
            </p>
          </>
        ) : (
          <>
            <h2 className="text-4xl font-semibold">
              Your shopping cart is empty.
            </h2>
            <p className="mt-1 text-xl">
              Check out Junkerri art{" "}
              <Link href="/" className="text-red-500 underline">
                here!
              </Link>
            </p>
          </>
        )}

        {cartCount > 0 ? (
          <div className="mt-12">
            {Object.entries(cartDetails).map(([key, product]) => (
              <div
                key={key}
                className="flex justify-between space-x-4 hover:shadow-lg hover:border-opacity-50 border border-opacity-0 rounded-md p-4"
              >
                {/* Image + Name */}
                <Link
                  href={`/products/${product.id}`}
                  className="flex items-center space-x-4 group"
                >
                  <div className="relative w-20 h-20 group-hover:scale-110 transition-transform">
                    <Image
                      src={smallImage(product.image)}
                      alt={product.name}
                      fill
                      style={{ objectFit: "contain" }}
                      placeholder={"blur"}
                      blurDataURL={blurPlaceholderImg}
                    />
                  </div>
                  <p className="hidden sm:block font-semibold text-xl group-hover:underline">
                    {product.name}
                  </p>
                </Link>

                {/* Price + Actions */}

                <div className="flex flex-col flex-grow justify-between sm:flex-row items-center">
                  <p className="block sm:hidden font-semibold text-xl group-hover:underline">
                    {product.name}
                  </p>
                  <div className="flex items-center w-full justify-between sm:justify-end sm:gap-8">
                    {/* Quantity */}
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => removeItem(product)}
                        disabled={product?.quantity <= 1}
                        className="disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-current hover:bg-rose-100 hover:text-rose-500 rounded-md p-1"
                      >
                        <MinusSmallIcon className="w-6 h-6 flex-shrink-0" />
                      </button>
                      <p className="font-semibold text-xl">
                        {product.quantity}
                      </p>
                      <button
                        onClick={() => addItem(product)}
                        className="hover:bg-green-100 hover:text-green-500 rounded-md p-1"
                      >
                        <PlusSmallIcon className="w-6 h-6 flex-shrink-0 " />
                      </button>
                    </div>

                    {/* Price */}
                    <p className="font-semibold text-xl">
                      <XMarkIcon className="hidden sm:inline-block w-4 h-4 mr-2 text-gray-500" />
                      {formatCurrency(product.price)}
                    </p>

                    {/* Remove item */}
                    <button
                      onClick={() => removeItem(product, product.quantity)}
                      className="ml-4 hover:text-rose-500"
                    >
                      <XCircleIcon className="w-6 h-6 flex-shrink-0 opacity-50 hover:opacity-100 transition-opacity" />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <div className="flex flex-col items-end border-t py-4 mt-8">
              <p className="text-xl">
                Total:{" "}
                <span className="font-semibold">
                  {formatCurrency(totalPrice)}
                </span>
              </p>

              <button
                onClick={redirectToCheckout}
                disabled={redirecting}
                className="border rounded py-2 px-6 bg-rose-500 hover:bg-rose-600 border-rose-500 hover:border-rose-600 focus:ring-4 focus:ring-opacity-50 focus:ring-rose-500 text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-rose-500 max-w-max mt-4"
              >
                {redirecting ? "Redirecting..." : "Go to Checkout"}
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Cart;
