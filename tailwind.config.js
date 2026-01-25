import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    // Embla / Carousel required classes
    "flex",
    "flex-[0_0_100%]",
    "min-w-0",
    "shrink-0",
    "grow-0",
    "basis-full",
    "overflow-hidden",
    "items-center",
    "justify-center",
    // Optional: if you use pl-4, -ml-4, etc.
    "pl-4",
    "-ml-4",
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        bebas: ["var(--font-bebas)", "sans-serif"],
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    heroui({
      prefix: "heroui",
      addCommonColors: false,
      defaultTheme: "light",
      defaultExtendTheme: "light",
      layout: {},
    }),
  ],
};

export default config;
