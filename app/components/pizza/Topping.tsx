import Image from "next/image";
import { IoMdCheckmark } from "react-icons/io";
import { useEffect, useState } from "react";
import { ToppingType } from "./PizzaDetails";

interface ToppingProps {
  item: ToppingType;
  toppings: ToppingType[];
  setToppings: (toppings: ToppingType[]) => void;
}

const Topping: React.FC<ToppingProps> = ({ item, toppings, setToppings }) => {
  const [isChecked, setIsChecked] = useState(false);

  // handle checkbox
  const handleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  // handle toppings

  const handleToppings = () => {
    if (isChecked) {
      // use set to ensure unique values
      const newToppings = new Set([...toppings, { ...item }]);
      // convert set back to array
      setToppings(Array.from(newToppings));
    } else {
      // remove topping with matching name
      const newToppings = toppings.filter(
        (topping) => topping.name !== item.name
      );
      setToppings(newToppings);
    }
  };

  useEffect(() => {
    handleToppings();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isChecked]);

  return (
    <div
      className={` ${
        isChecked && "border-orange-600"
      } relative cursor-pointer w-full max-w-[100px] h-[130px] p-1 flex flex-col justify-center 
      border rounded-md bg-slate-100`}
    >
      <Image src={item.image} width={70} height={70} alt="topping" />
      <div className="text-sm capitalize text-center font-medium">
        {item.name}
      </div>
      {/* checkbox */}
      <input
        onChange={handleCheckbox}
        type="checkbox"
        checked={isChecked}
        className="absolute w-full h-full opacity-0 cursor-pointer"
      />
      {/* checkmark icon */}
      <div
        className={` ${
          isChecked ? "opacity-100" : "opacity-0"
        } absolute top-1 right-1 `}
      >
        <IoMdCheckmark className="text-xl text-orange-500 " />
      </div>
    </div>
  );
};

export default Topping;
