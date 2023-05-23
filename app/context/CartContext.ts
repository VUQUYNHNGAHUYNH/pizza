
import { createContext, useState, ReactNode } from 'react';

type CartProviderProps = {
  children: ReactNode;
}

type CartItem = {
    id: number;
    quantity: number;
}

type CartContextType = {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
getItemQuantity: (id: number) => number;
increaseCartQuantity: (id: number) => void;
decreaseCartQuantity: (id: number) => void;
removeFromCart: (id: number) => void;
}

export const CartContext = createContext({} as CartContextType)

const CartProvider = ({ children }: CartProviderProps) => {
    const [ isOpen, setIsOpen ] = useState(false)
    const [ cartItems, setCartItems] = useState<CartItem[]>([])

    function getItemQuantity(id: number) {
        return cartItems.find((item) => item.id === id)?.quantity || 0;
      }

      function increaseCartQuantity(id: number) {
        setCartItems(currItems => {
          if (currItems.find(item => item.id === id) == null) {
            return [...currItems, { id, quantity: 1 }]
          } else {
            return currItems.map(item => {
              if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 }
              } else {
                return item
              }
            })
          }
        })
      }

        function decreaseCartQuantity(id: number){
           setCartItems(currItems => {
            if (currItems.find(item => item.id === id)?.quantity === 1) {
                return currItems.filter(item => item.id !== id)
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return item
                    }
                })
            }
           })
        }

        function removeFromCart(id: number) {
            setCartItems(currItems => currItems.filter(item => item.id !== id))
          }
      
    return (
      <CartContext.Provider value={{ isOpen,setIsOpen, getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart }}>
        {children}
        </CartContext.Provider>
    )
}

export default CartProvider