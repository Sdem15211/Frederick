import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      background: "#424D61",
      white: "#FFF",
      navy: "#17253B",
      circles: "#8A8F9D",
      black: "#000000",
      transparent: "transparent",
    },
    fontSize: {
      sm: "0.875rem",
      lg: "1rem",
      llg: "1.25rem",
      xl: "1.5rem",
      "2xl": "1.875rem",
      "2.5xl": "2.5rem",
      "3xl": "4rem",
      "4xl": "4.5rem",
      "5xl": "6.25rem",
      "6xl": "9.25rem",
    },

    extend: {
      letterSpacing: {
        logo: "0.25em",
        heading: "0.35em",
      },
    },
  },
  plugins: [],
};
export default config;
