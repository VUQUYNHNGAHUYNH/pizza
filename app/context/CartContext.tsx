"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { ToppingType } from "../components/pizza/PizzaDetails";

export type CartItemType = {
  id: number;
  name: string;
  image: string;
  price: number;
  toppings?: ToppingType[];
  size: string;
  amount: number;
};

type CartContextType = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  addToCart: (item: CartItemType) => void;
  cartItems: CartItemType[];
};

type CartProviderProps = {
  children: ReactNode;
};

export const CartContext = createContext({} as CartContextType);

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }: CartProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);

  const addToCart = (item: CartItemType) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + 1,
      };

      setCartItems((prevCartItems) =>
        prevCartItems.map((cartItem) =>
          cartItem.id === item.id ? updatedItem : cartItem
        )
      );
    } else {
      const newItem: CartItemType = { ...item, amount: 1 };
      setCartItems([...cartItems, newItem]);
    }
  };

  return (
    <CartContext.Provider value={{ isOpen, setIsOpen, addToCart, cartItems }}>
      {children}
    </CartContext.Provider>
  );
};
