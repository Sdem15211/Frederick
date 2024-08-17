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
    },
    fontSize: {
      sm: "0.875rem",
      lg: "1rem",
      xl: "1.5rem",
      "2xl": "1.875rem",
      "5xl": "9.25rem",
    },

    extend: {
      letterSpacing: {
        logo: "0.25em",
      },
    },
  },
  plugins: [],
};
export default config;
