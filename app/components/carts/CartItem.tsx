import { CartItemType, useCartContext } from "@/app/context/CartContext";
import Image from "next/image";
import { BiPlus, BiMinus } from "react-icons/bi";
import { BsFillTrashFill } from "react-icons/bs";

type CartItemProps = {
  item: CartItemType;
};

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { increaseAmount, decreaseAmount, removeItem } = useCartContext();
  return (
    <div className="select-none">
      <div className=" flex gap-x-6 mb-2">
        {/* image */}
        <div className="flex justify-center items-center">
          <Image src={item.image} width={100} height={100} alt="pizza" />
        </div>
        {/* pizza info */}
        <div className="flex-1 flex flex-col justify-center gap-y-1">
          <div className="text-lg capitalize font-bold">{item.name}</div>
          <div className="capitalize font-medium mb-2 text-[15px]">
            {item.size} size
          </div>
          {/* quantity controls */}
          <div className="flex items-center gap-x-1">
            <div
              onClick={() => decreaseAmount(item.id)}
              className="flex justify-center items-center cursor-pointer text-white rounded-full bg-orange-600"
            >
              <BiMinus size={20} />
            </div>
            <div className="font-semibold flex flex-1 max-w-[30px] justify-center items-center text-lg">
              {item.amount}
            </div>
            <div
              onClick={() => increaseAmount(item.id)}
              className="flex justify-center items-center cursor-pointer text-white rounded-full bg-orange-600"
            >
              <BiPlus size={20} />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between items-center">
          {/* remove item */}
          <div
            onClick={() => removeItem(item.id)}
            className="flex justify-center items-center self-end cursor-pointer text-orange-500 hover:text-orange-400"
          >
            <BsFillTrashFill size={20} />
          </div>
          {/* price */}
          <div className="text-center font-semibold text-lg">
            <span>${(item.price * item.amount).toFixed(2)}</span>
          </div>
        </div>
        {/* toppings */}
      </div>
      <div className="flex flex-wrap items-center gap-3 p-4 border-b border-black/10">
        <div className="font-semibold">
          Toppings: {item.toppings?.length === 0 && "None"}
        </div>
        {item.toppings?.map((topping) => (
          <div
            key={topping.name}
            className="capitalize text-sm bg-orange-600 font-medium px-3 py-1
          rounded-full text-white"
          >
            {topping.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartItem;
