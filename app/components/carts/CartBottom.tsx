import { useCartContext } from "@/app/context/CartContext";

const CartBottom = () => {
  const { setIsOpen, cartItems } = useCartContext();
  return (
    <div>
      {cartItems.length >= 1 ? (
        <div className="px-6 py-3 mt-auto">
          <div className="flex items-center justify-between mb-4 text-lg font-semibold">
            <div>Total:</div>
            <div>320</div>
          </div>

          <div>
            <button
              className="py-2 px-3 text-lg w-full text-white rounded-xl font-semibold transition-all duration-300 hover:opacity-80
       hover:scale-105 bg-gradient-to-r from-yellow-500 to-orange-600 flex justify-center gap-x-2"
            >
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <div className="absolute top-0 w-full h-full flex justify-center items-center font-quicksand font-semibold">
          Your cart is empty
        </div>
      )}
    </div>
  );
};

export default CartBottom;
