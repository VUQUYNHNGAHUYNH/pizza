import Image from "next/image";
import { PizzaProps } from "./Pizza";

interface SizeSelectionProps extends PizzaProps {
  size: string;
  setSize: (size: string) => void;
}

const SizeSelection: React.FC<SizeSelectionProps> = ({
  pizza,
  size,
  setSize,
}) => {
  return (
    <div className="mx-auto max-w-lg lg:max-w-none flex items-center justify-center ">
      <div className="flex gap-x-12 items-baseline mb-10 font-medium">
        <label className="flex flex-col items-center gap-x-2 cursor-pointer">
          <Image
            src={pizza.image}
            width={60}
            height={60}
            alt="pizza"
            className={` ${
              size === "small"
                ? "border-2 border-orange-500 p-[2px] rounded-full"
                : "border-transparent filter saturate-[0.3]"
            }`}
          />
          <input
            type="radio"
            name="size"
            checked={size === "small"}
            onChange={(e) => setSize(e.target.value)}
            className="appearance-none"
            value="small"
          />
          Small
        </label>

        <label className="flex flex-col items-center gap-x-2 cursor-pointer">
          <Image
            src={pizza.image}
            width={70}
            height={70}
            alt="pizza"
            className={` ${
              size === "medium"
                ? "border-2 border-orange-500 p-[2px] rounded-full"
                : "border-transparent filter saturate-[0.3]"
            }`}
          />
          <input
            type="radio"
            name="size"
            checked={size === "medium"}
            onChange={(e) => setSize(e.target.value)}
            className="appearance-none"
            value="medium"
          />
          Medium
        </label>

        <label className="flex flex-col items-center gap-x-2 cursor-pointer">
          <Image
            src={pizza.image}
            width={80}
            height={80}
            alt="pizza"
            className={` ${
              size === "large"
                ? "border-2 border-orange-500 p-[2px] rounded-full"
                : "border-transparent filter saturate-[0.3]"
            }`}
          />
          <input
            type="radio"
            name="size"
            checked={size === "large"}
            onChange={(e) => setSize(e.target.value)}
            className="appearance-none"
            value="large"
          />
          Large
        </label>
      </div>
    </div>
  );
};

export default SizeSelection;
