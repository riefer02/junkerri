import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { toast } from "react-hot-toast";
import { useShoppingCart } from "@/hooks/use-shopping-cart";
import { formatCurrency } from "@/lib/utils";
import { blurPlaceholderImg } from "@/lib/placeholder";
import { smallImage } from "../lib/images";
import { addSpaces } from "@/lib/utils";

const ProductCard = (props) => {
  const { cartCount, addItem } = useShoppingCart();
  const [adding, setAdding] = useState(false);
  const [currentVariation, setCurrentVariation] = useState({});

  const toastId = useRef();
  const firstRun = useRef(true);

  const handleOnAddToCart = (event) => {
    event.preventDefault();

    setAdding(true);
    toastId.current = toast.loading("Adding 1 item...");

    if (typeof props.onClickAdd === "function") {
      props.onClickAdd();
    }

    if (Object.entries(currentVariation).length > 0) {
      const variationProduct = {
        ...props,
        id: currentVariation.id,
        name: `${props.name} ${currentVariation.size} ${props.unit}`,
        price: currentVariation.price,
        slug: props.slug + `/?variation_id=${currentVariation.id}`,
        size: addSpaces(currentVariation.size),
      };
      addItem(variationProduct);
      return;
    }

    addItem(props);
  };

  useEffect(() => {
    let timeout;
    if (firstRun.current) {
      firstRun.current = false;
      if (props.variations) setCurrentVariation(props.variations[0]);
      return;
    }

    if (adding) {
      setAdding(false);
      timeout = setTimeout(
        () =>
          toast.success(`${props.name} added`, {
            id: toastId.current,
          }),
        2000
      );
    }

    if (typeof props.onAddEnded === "function") {
      props.onAddEnded();
    }

    return () => clearTimeout(timeout);
  }, [cartCount]);

  const setVariation = (event, index) => {
    event.preventDefault();
    setCurrentVariation(props.variations[index]);
  };

  return (
    <Link
      href={`/products/${props.slug}${
        props.variations ? `/?variation_id=${currentVariation.id}` : ""
      }`}
      className="border rounded-md p-6 group"
    >
      {/* Product's image */}
      <div className="relative w-full h-80">
        <Image
          src={smallImage(props.image)}
          alt={props.name}
          fill
          style={{ objectFit: "contain" }}
          placeholder={"blur"}
          blurDataURL={blurPlaceholderImg}
        />
      </div>

      {/* Name + Rating */}
      <div className="mt-4 sm:mt-8">
        <p className="font-semibold text-lg capitalize mb-2">{props.name}</p>
        {props.size && !props.variations && (
          <p className="text-sm block text-gray-500">
            <span className="px-2 py-1 border border-rose-500 text-white bg-rose-500 rounded-2xl mr-1">
              {props.size}
            </span>{" "}
            IN.
          </p>
        )}
        {props.variations && (
          <div className="flex gap-2 text-sm text-gray-400 items-center justify-start">
            <ul className="flex gap-2">
              {props.variations.map((variation, index) => (
                <li
                  className={` px-2 py-1 rounded-2xl cursor-pointer hover:bg-rose-500 hover:text-white transition ease-out hover:border-rose-500 border ${
                    currentVariation.size === variation.size
                      ? "bg-rose-500 text-white border-rose-500"
                      : "bg-white text-rose-500 border-gray-300"
                  }`}
                  key={index}
                  onClick={(event) => setVariation(event, index)}
                >
                  {addSpaces(variation.size)}
                </li>
              ))}
            </ul>
            <div>{props.unit}.</div>
          </div>
        )}
      </div>

      {/* Price + CTA */}
      <div className="mt-4 flex items-center justify-between space-x-2">
        <div>
          <p className="text-gray-500">Price</p>
          <p className="text-lg font-semibold">
            {!props.variations && formatCurrency(props.price, props.currency)}
            {props.variations &&
              formatCurrency(currentVariation.price, props.currency)}
          </p>
        </div>

        <button
          type="button"
          onClick={handleOnAddToCart}
          disabled={adding || props.disabled}
          className={`border rounded-lg py-1 px-4 hover:bg-rose-500 hover:border-rose-500 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
            adding
              ? "disabled:bg-rose-500 disabled:border-rose-500 disabled:text-white"
              : "disabled:hover:bg-transparent disabled:hover:text-current disabled:hover:border-gray-200"
          }`}
        >
          {adding ? "Adding..." : "Add to cart"}
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
