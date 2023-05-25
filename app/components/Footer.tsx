import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-orange-600 bg-pattern mt-24 lg:mt-16 py-10 font-quicksand">
      <div className="container mx-auto flex flex-col items-center gap-y-4">
        <div className="text-4xl lg:text-5xl font-bangers text-white">
          PIZZA
        </div>
        {/* social icons */}
        <div className="flex gap-x-6 text-2xl text-white">
          <Link href={"#"}>
            <FaFacebook />
          </Link>
          <Link href={"#"}>
            <FaInstagram />
          </Link>
        </div>
        {/* copyright */}
        <div className="text-white text-xl font-medium">
          &copy; 2023 Pizza. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
