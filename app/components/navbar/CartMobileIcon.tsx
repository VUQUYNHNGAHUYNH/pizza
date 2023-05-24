"use client";

import { BsHandbagFill } from "react-icons/bs";
import { useCartContext } from "@/app/context/CartContext";

const CartMobileIcon = () => {
  const { isOpen, setIsOpen } = useCartContext();
  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="bg-slate-700 w-[55px] h-[55px] rounded-full flex justify-center
  items-center text-white cursor-pointer fixed right-4 bottom-4 z-20 lg:hidden
  "
    >
      <BsHandbagFill className="text-3xl" />
      <div
        className="absolute text-white w-4 h-4 rounded-full bg-orange-600 bottom-2 right-2
      flex justify-center items-center font-semibold"
      >
        3
      </div>
    </div>
  );
};

export default CartMobileIcon;
