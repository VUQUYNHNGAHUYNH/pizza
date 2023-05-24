import { useCartContext } from "@/app/context/CartContext";
import { IoCloseOutline } from "react-icons/io5";

export const Header = () => {
  const { setIsOpen } = useCartContext();
  return (
    <div className="w-full h-20 border-b flex items-center justify-between px-10">
      <div className="font-semibold text-xl">Shopping Bag(3) </div>
      <div className="cursor-pointer group ">
        <IoCloseOutline
          onClick={() => setIsOpen(false)}
          className="text-3xl group-hover:scale-110 duration-300 transition-all"
        />
      </div>
    </div>
  );
};
