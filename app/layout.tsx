import "./globals.css";
import { Quicksand, Bangers } from "next/font/google";

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
    <html lang="en">
      <body className={`${quicksand.variable} ${bangers.variable}`}>
        {children}
      </body>
    </html>
  );
}
