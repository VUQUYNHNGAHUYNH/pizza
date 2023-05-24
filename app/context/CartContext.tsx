"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
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
  increaseAmount: (id: number) => void;
  decreaseAmount: (id: number) => void;
  removeItem: (id: number) => void;
  cartTotalPrice: number;
  itemAmount: number;
};

type CartProviderProps = {
  children: ReactNode;
};

export const CartContext = createContext({} as CartContextType);

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }: CartProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);

  const [cartTotalPrice, setCartTotalPrice] = useState(0);
  const [itemAmount, setItemAmount] = useState(0);

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

  const increaseAmount = (id: number) => {
    const itemIndex = cartItems.findIndex((item) => item.id === id);

    if (itemIndex !== -1) {
      const newCart = [...cartItems];
      newCart[itemIndex].amount += 1;
      setCartItems(newCart);
    }
  };

  const decreaseAmount = (id: number) => {
    const itemIndex = cartItems.findIndex((item) => item.id === id);

    if (itemIndex !== -1) {
      const newCart = [...cartItems];

      if (newCart[itemIndex].amount > 1) {
        newCart[itemIndex].amount -= 1;
      }
      setCartItems(newCart);
    }
  };

  const removeItem = (id: number) => {
    const newCart = cartItems.filter((item) => item.id !== id);
    setCartItems(newCart);
  };

  // update item amount
  useEffect(() => {
    const amount = cartItems.reduce((acc, item) => {
      return acc + item.amount;
    }, 0);
    setItemAmount(amount);
  }, [cartItems]);

  // update cart total price
  useEffect(() => {
    const totalPrice = cartItems.reduce((acc, item) => {
      return acc + item.price * item.amount;
    }, 0);

    setCartTotalPrice(totalPrice);
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        isOpen,
        setIsOpen,
        addToCart,
        cartItems,
        increaseAmount,
        decreaseAmount,
        removeItem,
        itemAmount,
        cartTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
