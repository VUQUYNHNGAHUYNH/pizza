"use client";

import { useCartContext } from "@/app/context/CartContext";
import Image from "next/image";
import { useEffect, useState } from "react";

type modalProps = {
  setModal: (modal: boolean) => void;
};

const CheckoutDetail: React.FC<modalProps> = ({ setModal }) => {
  const { cartItems, setCartItems, cartTotalPrice } = useCartContext();
  const [success, setSuccess] = useState<boolean>(false);

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        setCartItems([]);
        setSuccess(false);
        setModal(false);
      }, 3000);
    }
  }, [success, setCartItems, setModal]);

  return (
    <>
      {success ? (
        <div className="flex flex-col justify-center h-full items-center tracking-wider font-bold text-xl lg:text-2xl font-bangers">
          Thank you! The order has been placed!
          <Image
            src={"/success-1.gif"}
            width={130}
            height={130}
            alt="success"
          />
        </div>
      ) : (
        <div className="font-quicksand lg:gap-x-8 h-full lg:px-12 lg:py-8">
          <div className="text-lg uppercase font-semibold p-2">Checkout</div>
          <div className="flex flex-col lg:flex-row lg:gap-x-4 h-[93vh] lg:h-[48vh]">
            <div className="flex-1 h-full overflow-y-auto lg:overflow-y-visible py-4 px-8 lg:px-0 lg:py-0 ">
              {/* input wrapper */}
              <div className="flex flex-col justify-center mt-24 md:mt-16 lg:mt-0 gap-4 h-full">
                {/* firstname & lastname */}
                <div className=" flex flex-col lg:flex-row justify-between gap-4 lg:gap-0 lg:gap-x-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full py-2 px-6 rounded-xl border border-gray-300"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full py-2 px-6 rounded-xl border border-gray-300"
                  />
                </div>
                {/* phone & email */}
                <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-0 lg:gap-x-4">
                  <input
                    type="text"
                    placeholder="Phone"
                    className="w-full py-2 px-6 rounded-xl border border-gray-300"
                  />
                  <input
                    type="text"
                    placeholder="Email"
                    className="w-full py-2 px-6 rounded-xl border border-gray-300"
                  />
                </div>
                {/* Street and street no  */}
                <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-0 lg:gap-x-4">
                  <input
                    type="text"
                    placeholder="Street Name"
                    className="w-full py-2 px-6 rounded-xl border border-gray-300"
                  />
                  <input
                    type="text"
                    placeholder="Street No."
                    className="w-full py-2 px-6 rounded-xl border border-gray-300"
                  />
                </div>
                {/* textarea */}
                <div className="flex-1 h-full">
                  <textarea
                    className="w-full h-full py-4 px-6 resize-none rounded-xl border border-gray-300"
                    placeholder="Mentions (optional)"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="flex-1 h-full lg:max-w-[40%] flex flex-col justify-between pt-3 px-8 lg:p-0 ">
              <div className="border rounded-lg flex flex-col mb-4 p-4 h-full">
                <div className="uppercase font-bold mb-4 border-b pb-4 text-base">
                  Order Summary
                </div>
                {/* items */}
                <div
                  className="overflow-y-scroll overflow-hidden font-semibold scrollbar-thin scrollbar-thumb-gray-200 
        scrollbar-track-orange-300 flex flex-col gap-y-4 h-[250px] py-2 px-4"
                >
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between text-lg">
                      <div className="flex gap-x-2">
                        <p className="capitalize">{item.name}</p>
                        <p>{item.amount > 1 && `X ${item.amount}`}</p>
                      </div>
                      <div>${(item.price * item.amount).toFixed(2)}</div>
                    </div>
                  ))}
                </div>
              </div>
              {/* place order btn */}
              <div>
                <div className="flex items-center justify-between mb-2 text-lg font-bold">
                  <div>Total:</div>
                  <div>${cartTotalPrice}</div>
                </div>
                <button
                  onClick={() => setSuccess(true)}
                  className="py-3 px-6 text-lg w-full text-white rounded-xl font-semibold transition-all duration-300 hover:opacity-80
   hover:scale-105 bg-gradient-to-r from-yellow-500 to-orange-600 flex justify-center gap-x-2"
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CheckoutDetail;
