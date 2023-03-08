import { useState } from "react";
import dynamic from "next/dynamic";
import NextHead from "@/components/Head";
const ProductCard = dynamic(() => import("@/components/ProductCard"), {
  ssr: false,
});

import products from "products";

export default function Home({ products }) {
  const [disabled, setDisabled] = useState(false);

  return (
    <>
      <NextHead />
      <h1 className="hidden">
        Junkerri Art | Playful Abstract Creations by Nepali Artist Aastha Karki
      </h1>
      <h2 className="hidden">
        Discover the vibrant and captivating world of Junkerri Art, brought to
        life by the talented Nepali artist, Aastha Karki.
      </h2>
      <div className="container xl:max-w-screen-xl mx-auto py-12 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              disabled={disabled}
              onClickAdd={() => setDisabled(true)}
              onAddEnded={() => setDisabled(false)}
              {...product}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  // Fetch products from an API or database
  const res = await fetch("https://example.com/api/products");
  const products = await res.json();

  // Pass products as props to the component
  return {
    props: {
      products,
    },
  };
}
