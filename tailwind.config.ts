import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        aegean: "#0877d8",
        deepAegean: "#063f8c",
        obsidian: "#172033",
        marble: "#fbf8ef",
        limestone: "#e8dfcf",
        laurel: "#b7922a"
      },
      fontFamily: {
        display: ["var(--font-display)"],
        sans: ["var(--font-sans)"]
      },
      boxShadow: {
        temple: "0 24px 70px rgba(8, 119, 216, 0.16)"
      }
    }
  },
  plugins: []
};

export default config;
