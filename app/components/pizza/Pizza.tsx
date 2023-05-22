"use client";

import Image from "next/image";
import { useState } from "react";
import Modal from "react-modal";
import { IoCloseOutline } from "react-icons/io5";
import PizzaDetails from "./PizzaDetails";

export type PizzaProps = {
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

// bind modal to body
Modal.setAppElement("body");

// modal styles
const modalStyles = {
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: 50, // Add a higher z-index to the modal overlay
  },
};

const Pizza: React.FC<PizzaProps> = ({ pizza }) => {
  // modal state
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="group relative py-16 lg:py-20 cursor-pointer">
      <div className="flex items-center justify-center">
        <Image
          onClick={openModal}
          src={pizza.image}
          alt="image"
          width={142}
          height={142}
          className="z-10 group-hover:translate-y-2 transition-all duration-300"
        />
      </div>
      <div className="absolute inset-x-0 top-[50%] flex items-center justify-center">
        <div className="w-[180px] h-[180px] rounded-3xl shadow-xl bg-gradient-to-b from-slate-300 to-slate-100">
          <div className="flex flex-col mt-20 gap-4">
            <p
              onClick={openModal}
              className="capitalize text-center font-semibold text-lg cursor-pointer"
            >
              {pizza.name}
            </p>
            <div className="flex justify-between px-4 items-center">
              <p className="text-lg font-bold">${pizza.priceSm}</p>
              <button
                onClick={openModal}
                className="p-2 text-sm text-white rounded-xl font-semibold transition-all hover:opacity-80 hover:scale-105 bg-gradient-to-r from-[#EC9F05] to-[#FF4E00]"
              >
                Choose
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* modal */}
      {showModal && (
        <Modal
          isOpen={showModal}
          style={modalStyles}
          onRequestClose={closeModal}
          contentLabel="Pizza Modal"
          className="bg-white h-full w-full lg:max-w-[900px] lg:max-h-[600px] lg:rounded-3xl lg:shadow-2xl
           lg:overflow-hidden lg:fixed lg:top-1/2 lg:left-1/2 lg:translate-x-[-50%] lg:translate-y-[-50%] outline-none"
        >
          {/* close modal icon */}
          <div
            onClick={closeModal}
            className="absolute top-4 right-4 cursor-pointer hover:scale-110 duration-200"
          >
            <IoCloseOutline className="text-4xl text-orange-600 cursor-pointer" />
          </div>
          {/* pizza details */}
          <PizzaDetails pizza={pizza} />
        </Modal>
      )}
    </div>
  );
};

export default Pizza;
