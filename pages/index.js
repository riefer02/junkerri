import { useState } from "react";
import dynamic from "next/dynamic";
// import { ProductCard } from '@/components/index';

const ProductCard = dynamic(() => import("@/components/ProductCard"), {
  ssr: false,
});

import products from "products";

export default function Home() {
  const [disabled, setDisabled] = useState(false);

  return (
    <div className="container xl:max-w-screen-xl mx-auto py-12 px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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
  );
}
