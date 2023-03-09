import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";
import { useShoppingCart } from "@/hooks/use-shopping-cart";
import Image from "next/image";
import Head from "next/head";
import { formatCurrency } from "@/lib/utils";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/solid";
import { useModal } from "@/hooks/use-modal";
import { blurPlaceholderImg } from "@/lib/placeholder";
import { smallImage } from "@/lib/images";
import { baseUrl } from "@/lib/utils";

// import products from "products";

const Product = (props) => {
  const router = useRouter();
  const { cartCount, addItem } = useShoppingCart();
  const { isActive, modalData, openModal, closeModal } = useModal();
  const [qty, setQty] = useState(1);
  const [adding, setAdding] = useState(false);
  const toastId = useRef();
  const firstRun = useRef(true);

  const handleOnAddToCart = () => {
    setAdding(true);

    toastId.current = toast.loading(
      `Adding ${qty} item${qty > 1 ? "s" : ""}...`
    );
    addItem(props, qty);
  };

  useEffect(() => {
    let timeout;
    if (firstRun.current) {
      firstRun.current = false;
      return;
    }

    timeout = setTimeout(
      () =>
        toast.success(`${qty} ${props.name} added`, {
          id: toastId.current,
        }),
      2000
    );

    setQty(1);
    return () => clearTimeout(timeout);
  }, [cartCount]);

  return router.isFallback ? (
    <>
      <Head>
        {/* <title>Loading...</title> */}
      </Head>
      <p className="text-center text-lg py-12">Loading...</p>
    </>
  ) : (
    <>
      <Head>
        <title>{props.name} | Junkerri</title>
        <meta
          name="description"
          content={`${props.name}, Limited Edition of ${props.quantity}, Signed and Numbered, ${props.size} in., Digital Art by Aastha Karki`}
        />
      </Head>
      <div className="container lg:max-w-screen-lg mx-auto py-12 px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-12">
          {/* Product's image */}

          <div
            className="relative w-80 h-80 sm:w-96 sm:h-96 pointer-events-none sm:pointer-events-auto sm:cursor-zoom-in"
            onClick={() =>
              openModal(true, {
                image: `${window.location.origin}${props.image}`,
                name: props.name || "",
              })
            }
          >
            <Image
              src={smallImage(props.image)}
              alt={props.name}
              fill
              style={{ objectFit: "contain" }}
              placeholder={"blur"}
              blurDataURL={blurPlaceholderImg}
            />
          </div>

          {/* Product's details */}
          <div className="flex-1 max-w-md border border-opacity-50 rounded-md shadow-lg p-6 w-full">
            <h2 className="text-3xl font-semibold">{props.name}</h2>

            <p className="mb-2">
              <span className="text-gray-500">Availability:</span>{" "}
              <span className="font-semibold">In stock</span>
            </p>

            <div className="flex items-start lg:text-lg justify-center text-gray-600">
              {props.quantity &&
                `Limited Edition of ${props.quantity}, Signed and Numbered`}
              {props.size && `, ${props.size} in.`}
            </div>

            {/* Price */}
            <div className="mt-4 md:mt-8 border-t pt-4">
              <p className="text-gray-500">Price:</p>
              <p className="text-xl font-semibold">
                {formatCurrency(props.price)}
              </p>
            </div>

            <div className="mt-4 border-t pt-4">
              {/* Quantity */}
              <p className="text-gray-500">Quantity:</p>
              <div className="mt-1 flex items-center space-x-3">
                <button
                  onClick={() => setQty((prev) => prev - 1)}
                  disabled={qty <= 1}
                  className="disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-current hover:bg-rose-100 hover:text-rose-500 rounded-md p-1"
                >
                  <MinusSmallIcon className="w-6 h-6 flex-shrink-0" />
                </button>
                <p className="font-semibold text-xl">{qty}</p>
                <button
                  onClick={() => setQty((prev) => prev + 1)}
                  className="hover:bg-green-100 hover:text-green-500 rounded-md p-1"
                >
                  <PlusSmallIcon className="w-6 h-6 flex-shrink-0 " />
                </button>
              </div>

              {/* Add to cart button */}
              <button
                type="button"
                onClick={handleOnAddToCart}
                disabled={adding}
                className="mt-8 border rounded py-2 px-6 bg-rose-500 hover:bg-rose-600 border-rose-500 hover:border-rose-600 focus:ring-4 focus:ring-opacity-50 focus:ring-rose-500 text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Add to cart ({qty})
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getStaticPaths() {
  const res = await fetch(`${baseUrl}api/products`);
  const products = await res.json();

  return {
    // Existing posts are rendered to HTML at build time
    paths: Object.keys(products)?.map((slug) => ({
      params: { slug },
    })),
    // Enable statically generating additional pages
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  try {
    const res = await fetch(`${baseUrl}api/products`);
    const products = await res.json();
    const props =
      products?.find((product) => product.slug === params.slug) ?? {};
    return {
      props,
      // Next.js will attempt to re-generate the page:
      // - When a request comes in
      // - At most once every second
      revalidate: 1, // In seconds
    };
  } catch (error) {
    return { notFound: true };
  }
}

export default Product;
