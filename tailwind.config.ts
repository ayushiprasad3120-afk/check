import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F7F1E8",
        beige: "#EDE3D3",
        sand: "#D9C7AD",
        wine: "#5C1A2B",
        burgundy: "#7A2138",
        charcoal: "#211C1A",
        soot: "#141110",
        ink: "#1B1512",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      backgroundImage: {
        "grain": "url('/images/grain.svg')",
      },
      boxShadow: {
        soft: "0 20px 60px -20px rgba(28, 15, 15, 0.25)",
        glow: "0 0 80px 0 rgba(122, 33, 56, 0.25)",
      },
      borderRadius: {
        xl2: "1.75rem",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        float: "float 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
