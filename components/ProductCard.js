import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { toast } from "react-hot-toast";
import { useShoppingCart } from "@/hooks/use-shopping-cart";
import { formatCurrency } from "@/lib/utils";
import { Rating } from "@/components/index";

const blurPlaceholderImg =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAmACYDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwCuqHNWY0NOWPmrUUVTJ6lRWhGIzimtGa0Fi4pkkWBWyehzSXvGay80VO6c0VzN6nSo6D1XmrMQqGnq+KmT1NEtC6uMVFKRimCXioZZeK1UtDBx1IpDzRVeSXmism9TdbFs0wmiis5DQhc1BI5ooqoiZUdjmiiikxn/2Q==";

const ProductCard = (props) => {
  const { cartCount, addItem } = useShoppingCart();
  const [adding, setAdding] = useState(false);

  const toastId = useRef();
  const firstRun = useRef(true);

  const handleOnAddToCart = (event) => {
    event.preventDefault();

    setAdding(true);
    toastId.current = toast.loading("Adding 1 item...");

    if (typeof props.onClickAdd === "function") {
      props.onClickAdd();
    }

    addItem(props);
  };

  useEffect(() => {
    let timeout;
    if (firstRun.current) {
      firstRun.current = false;
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

  return (
    <Link
      href={`/products/${props.id}`}
      className="border rounded-md p-6 group"
    >
      {/* Product's image */}
      <div className="relative w-full h-64 group-hover:transform group-hover:scale-125 group-hover:ease-in-out group-hover:duration-500">
        <Image
          src={props.image}
          alt={props.name}
          fill
          style={{ objectFit: "contain" }}
          placeholder={"blur"}
          // blurDataURL={`/_next/image?url=${props.image}&w=16&q=1`}
          blurDataURL={blurPlaceholderImg}
        />
      </div>

      {/* Name + Rating */}
      <div className="mt-4 sm:mt-8">
        <p className="font-semibold text-lg capitalize">{props.name}</p>
        {/* <Rating rate={props?.rating?.rate} count={props?.rating?.count} /> */}
      </div>

      {/* Price + CTA */}
      <div className="mt-4 flex items-center justify-between space-x-2">
        <div>
          <p className="text-gray-500">Price</p>
          <p className="text-lg font-semibold">
            {formatCurrency(props.price, props.currency)}
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
