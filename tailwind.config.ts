import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        aegean: "#0B3D5C",
        deepAegean: "#082C43",
        obsidian: "#171717",
        marble: "#F7F2E8",
        limestone: "#D8CCB8",
        laurel: "#B08A3C",
        terracotta: "#A65332",
        stone: "#EFE6D6"
      },
      fontFamily: {
        display: ["var(--font-display)"],
        sans: ["var(--font-sans)"]
      },
      boxShadow: {
        temple: "0 24px 70px rgba(11, 61, 92, 0.18)"
      }
    }
  },
  plugins: []
};

export default config;
