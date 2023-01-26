import dynamic from "next/dynamic";
const Cart = dynamic(() => import("@/components/Cart"), {
  ssr: false,
});

function CartPage() {
  return (
    <>
      <Cart />
    </>
  );
}

export default CartPage;
