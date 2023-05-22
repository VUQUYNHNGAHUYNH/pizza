/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1280px",
    },
    extend: {
      fontFamily: {
        bangers: [`var(--font-bangers)`, "sans-serif"],
        quicksand: [`var(--font-quicksand)`, "sans-serif"],
      },
      backgroundImage: {
        pattern: "url('/pattern.png')",
      },
    },
  },
  plugins: [],
};
