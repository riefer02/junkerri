import { useState } from "react";
import dynamic from "next/dynamic";
import NextHead from "@/components/Head";
import { getProducts } from "@/lib/products";
import ErrorBoundary from "@/components/ErrorBoundary";
const ProductCard = dynamic(() => import("@/components/ProductCard"), {
  ssr: false,
});

export default function Home({ products }) {
  const [disabled, setDisabled] = useState(false);

  return (
    <ErrorBoundary>
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
    </ErrorBoundary>
  );
}

export async function getStaticProps() {
  // Fetch products from an API or database or file
  const products = getProducts();

  // Pass products as props to the component
  return {
    props: {
      products,
    },
  };
}
