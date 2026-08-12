import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{mdx,md}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B1E3C",
          50: "#EDF0F6",
          100: "#D2DAEA",
          300: "#7086AC",
          500: "#28406B",
          700: "#132A4C",
          900: "#0B1E3C",
          950: "#071527",
        },
        royal: {
          DEFAULT: "#2451D6",
          50: "#EDF1FD",
          100: "#D6E0FB",
          300: "#7C9BEF",
          500: "#2451D6",
          700: "#1B3EA8",
        },
        emerald: {
          DEFAULT: "#0E9F6E",
          50: "#E8F9F2",
          100: "#C7EFDD",
          300: "#5FCB9E",
          500: "#0E9F6E",
          700: "#0B7F58",
        },
        success: "#16A34A",
        surface: "#FFFFFF",
        canvas: "#F7F8FA",
        ink: {
          DEFAULT: "#1C2430",
          muted: "#5B6472",
          // WCAG AA fix: the original #8A93A3 only hit 3.1:1 on white
          // (fails the 4.5:1 minimum for normal text). #6B7485 clears
          // 4.71:1 while staying visually distinct from `ink.muted`.
          faint: "#6B7485",
        },
        border: {
          DEFAULT: "#E4E7EC",
          strong: "#CBD2DE",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-xl": ["4.5rem", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
        "display-lg": ["3.5rem", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-md": ["2.5rem", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        "display-sm": ["1.875rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      boxShadow: {
        soft: "0 2px 8px 0 rgba(11,30,60,0.04), 0 1px 2px 0 rgba(11,30,60,0.03)",
        card: "0 8px 24px -4px rgba(11,30,60,0.08), 0 2px 6px -2px rgba(11,30,60,0.04)",
        lifted: "0 24px 48px -12px rgba(11,30,60,0.18)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "arc-draw": {
          "0%": { strokeDashoffset: "1" },
          "100%": { strokeDashoffset: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.16,1,0.3,1) both",
      },
    },
  },
  plugins: [],
};

export default config;
