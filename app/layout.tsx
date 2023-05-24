import "./globals.css";
import { Quicksand, Bangers } from "next/font/google";

// components
import Navbar from "./components/navbar/Navbar";
import CartMobileIcon from "./components/navbar/CartMobileIcon";
import CartMobile from "./components/carts/Cart";

// provider
import { CartProvider } from "./context/CartContext";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});
const bangers = Bangers({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bangers",
});

export const metadata = {
  title: "Pizza Shop",
  description: "The best pizza in the world!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CartProvider>
      <html lang="en">
        <body className={`${quicksand.variable} ${bangers.variable}`}>
          <Navbar />
          <CartMobileIcon />
          <CartMobile />
          {children}
        </body>
      </html>
    </CartProvider>
  );
}
