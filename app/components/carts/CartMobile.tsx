"use client";

import { useContext } from "react";
import { CartContext } from "@/app/context/CartContext";

const CartMobile = () => {
  const {isOpen} = useContext(CartContext);

  return <div>CartMobile</div>;
};

export default CartMobile;
