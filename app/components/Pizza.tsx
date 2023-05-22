"use client";

import Image from "next/image";
import { HiOutlineShoppingCart } from "react-icons/hi";

type PizzaProps = {
  pizza: {
    id: number;
    name: string;
    image: string;
    priceSm: number;
    priceMd: number;
    priceLg: number;
    toppings: {
      image: string;
      name: string;
      price: number;
    }[];
  };
};

const Pizza: React.FC<PizzaProps> = ({ pizza }) => {
  return (
    <div className="relative py-16 lg:py-20">
      <div className=" flex items-center justify-center">
        <Image
          src={pizza.image}
          alt="image"
          width={140}
          height={140}
          className="z-10"
        />
      </div>
      <div className="absolute inset-x-0 top-[50%] flex items-center justify-center">
        <div className=" w-[190px] h-[180px] rounded-3xl shadow-xl bg-gradient-to-b from-slate-400 to-slate-100">
          <div className="flex flex-col mt-20 gap-4">
            <p className="capitalize text-center font-semibold text-lg cursor-pointer">
              {pizza.name}
            </p>
            <div className="flex justify-between px-4 items-center">
              <p className="text-lg font-bold">${pizza.priceSm}</p>
              <button className="p-2 text-sm text-white rounded-xl font-semibold transition-all bg-gradient-to-r from-[#EC9F05] to-[#FF4E00]  ">
                Choose
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
