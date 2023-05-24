"use client";

import { useCartContext } from "@/app/context/CartContext";
import CartBottom from "./CartBottom";
import CartItem from "./CartItem";
import { Header } from "./Header";

const Cart = () => {
  const { isOpen, cartItems } = useCartContext();

  return (
    <div
      className={`${
        isOpen ? "bottom-0" : "-bottom-full"
      } bg-white fixed w-full h-full font-quicksand
      left-0 z-20 transition-all duration-300 md:w-[50%] lg:w-[40%] xl:w-[30%] `}
    >
      <Header />
      {/* cart items */}
      <div
        className={`px-4 flex flex-col gap-y-4 py-2 mt-4 overflow-y-scroll h-[70vh]
        scrollbar-thin scrollbar-thumb-orange-400  ${
          cartItems.length >= 3
            ? "scrollbar-track-gray-200"
            : "scrollbar-track-transparent"
        } `}
      >
        {cartItems?.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </div>
      {/* cart bottom */}
      <CartBottom />
    </div>
  );
};

export default Cart;
