"use client";

import { useCartContext } from "@/app/context/CartContext";
import Image from "next/image";

const Navbar = () => {
  const { itemAmount, setIsOpen, isOpen } = useCartContext();
  return (
    <div className="absolute w-full py-8 mb-12 px-4 font-quicksand">
      <div className=" mx-auto container flex justify-between items-center">
        <div className="text-5xl font-bangers text-white">PIZZA</div>
        {/* phone */}
        <div className="flex items-center gap-x-3 ">
          <Image src={"phone.svg"} width={40} height={40} alt="phone" />
          <div className="flex flex-col">
            <div className="text-orange-100 font-semibold text-lg tracking-wide">
              Pizza delivery service
            </div>
            <div className="text-2xl text-white font-bold">032 824 5123</div>
          </div>
        </div>

        {/* cart */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="relative cursor-pointer hidden lg:flex"
        >
          <Image src={"bag.svg"} width={38} height={38} alt="bag" />
          <div
            className="absolute -top-2 left-8 w-6 h-6 rounded-full text-white bg-black flex justify-center
           items-center "
          >
            {itemAmount}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
