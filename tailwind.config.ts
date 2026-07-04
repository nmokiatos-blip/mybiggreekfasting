import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        aegean: "#0757d5",
        deepAegean: "#052667",
        obsidian: "#111319",
        marble: "#f7f4ed",
        limestone: "#ded4c2",
        laurel: "#c89d19"
      },
      fontFamily: {
        display: ["var(--font-display)"],
        sans: ["var(--font-sans)"]
      },
      boxShadow: {
        temple: "0 28px 80px rgba(5, 38, 103, 0.22)"
      }
    }
  },
  plugins: []
};

export default config;
