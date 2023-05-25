"use client";

import { useCartContext } from "@/app/context/CartContext";
import Modal from "react-modal";
import { useState } from "react";
import CheckoutDetail from "../checkout/CheckoutDetail";
import { IoCloseOutline } from "react-icons/io5";

// modal styles
const modalStyles = {
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: 50, // Add a higher z-index to the modal overlay
  },
};

// bind modal to body
Modal.setAppElement("body");

const CartBottom = () => {
  const { setIsOpen, cartItems, cartTotalPrice } = useCartContext();
  const [modal, setModal] = useState<boolean>(false);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <>
      {cartItems.length >= 1 ? (
        <div className="px-6 py-3 mt-auto">
          <div className="flex items-center justify-between mb-4 text-xl font-bold">
            <div>Total:</div>
            <div>${cartTotalPrice}</div>
          </div>

          <div>
            <button
              onClick={() => {
                setIsOpen(false), openModal();
              }}
              className="py-2 px-3 text-lg w-full text-white rounded-xl font-semibold transition-all duration-300 hover:opacity-80
       hover:scale-105 bg-gradient-to-r from-yellow-500 to-orange-600 flex justify-center gap-x-2"
            >
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <div className="absolute -z-10 top-0 w-full h-full text-orange-500 flex justify-center items-center font-quicksand font-semibold text-xl">
          Your cart is empty!
        </div>
      )}

      {/* checkout modal */}
      {modal && (
        <Modal
          className="bg-white w-full h-full lg:max-w-[1000px] lg:max-h-[800px] lg:rounded-3xl lg:shadow-xl
           lg:px-10 lg:py-20 lg:fixed lg:top-[50%] lg:left-[50%] lg:-translate-x-1/2 lg:-translate-y-1/2 outline-none"
          isOpen={modal}
          style={modalStyles}
          onRequestClose={closeModal}
          contentLabel="Checkout Modal"
        >
          <div
            onClick={closeModal}
            className="absolute z-30 right-2 top-2 hover:scale-100 duration-200 cursor-pointer"
          >
            <IoCloseOutline className="text-4xl text-orange-600" />
          </div>

          <CheckoutDetail setModal={setModal} />
        </Modal>
      )}
    </>
  );
};

export default CartBottom;
