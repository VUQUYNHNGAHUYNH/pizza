"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { PizzaProps } from "./Pizza";
import SizeSelection from "./SizeSelection";
import Topping from "./Topping";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useCartContext } from "@/app/context/CartContext";

export type ToppingType = {
  image: string;
  name: string;
  price: number;
};

const PizzaDetails: React.FC<PizzaProps> = ({ pizza }) => {
  const [size, setSize] = useState("small");
  const [toppings, setToppings] = useState<ToppingType[]>([]);
  const [toppingPrice, setToppingPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const { addToCart } = useCartContext();

  // handle add to cart
  const handleAddToCart = () => {
    const item = {
      id: pizza.id,
      name: pizza.name,
      image: pizza.image,
      price: totalPrice,
      toppings,
      size,
      amount: 1,
    };
    addToCart(item);
  };

  useEffect(() => {
    size === "small"
      ? setTotalPrice(parseFloat(pizza.priceSm.toFixed(2)))
      : size === "medium"
      ? setTotalPrice(parseFloat(pizza.priceMd.toFixed(2)))
      : size === "large"
      ? setTotalPrice(parseFloat(pizza.priceLg.toFixed(2)))
      : null;
  }, [pizza.priceLg, pizza.priceMd, pizza.priceSm, size]);

  //   set additional toppings price
  useEffect(() => {
    if (toppings.length > 0) {
      const totalToppingPrice = toppings.reduce((acc, curr) => {
        return acc + curr.price;
      }, 0);

      setToppingPrice(totalToppingPrice);
    } else {
      setToppingPrice(0);
    }
  }, [toppings]);

  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 h-full md:p-8 font-quicksand">
      {/* pizza image */}
      <div className="lg:flex-1 flex items-center justify-center mt-12 lg:mt-0">
        <Image
          src={pizza.image}
          alt="pizza"
          width={380}
          height={380}
          className="max-w-[300px] lg:max-w-none z-10 hover:translate-y-2 transition-all duration-300"
        />
      </div>
      {/* details */}
      <div className="flex flex-col flex-1">
        <div className="flex-1 p-2 text-center lg:text-left">
          <div
            className="flex-1 bg-white overflow-y-scroll h-[46vh] scrollbar-thin scrollbar-thumb-gray-100 
          scrollbar-track-orange-300 pr-2"
          >
            {/* name */}
            <h2 className="text-2xl text-center capitalize font-bold mb-4">
              {pizza.name}
            </h2>
            {/* sizes */}
            <div className="mb-4 text-lg text-center font-semibold">
              {size === "small"
                ? "25 cm"
                : size === "medium"
                ? "30 cm"
                : size === "large"
                ? "35 cm"
                : null}
            </div>
            {/* size selection */}
            <SizeSelection size={size} setSize={setSize} pizza={pizza} />
            {/* toppings list*/}
            <div className="mb-4 text-center text-lg font-semibold">
              Choose toppings
            </div>
            <div className="flex flex-1 flex-wrap gap-4 py-1 justify-center items-center">
              {pizza.toppings?.map((item, index) => (
                <Topping
                  key={index}
                  item={item}
                  toppings={toppings}
                  setToppings={setToppings}
                />
              ))}
            </div>
          </div>
        </div>

        {/* add to cart icon and price */}
        <div className="h-full flex items-center lg:items-end px-3">
          <button
            onClick={handleAddToCart}
            className="py-2 px-3 text-lg w-full text-white rounded-xl font-semibold transition-all duration-300 hover:opacity-80
       hover:scale-105 bg-gradient-to-r from-[#EC9F05] to-[#FF4E00] flex justify-center gap-x-2"
          >
            <HiOutlineShoppingCart size={24} />
            <span className="hidden lg:block">Add to cart for</span>
            <span>${(totalPrice + toppingPrice).toFixed(2)}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PizzaDetails;
