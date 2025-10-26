import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ember: {
          300: "#f4b07a",
          400: "#f28a4b",
          500: "#ec5e23",
        },
        midnight: {
          900: "#05030f",
          800: "#0b1024",
          700: "#131939",
        },
        arcane: {
          300: "#5fcddb",
          400: "#46a8f3",
          500: "#7f7cff",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "aurora":
          "radial-gradient(circle at 20% 20%, rgba(127,124,255,0.25), transparent 55%), radial-gradient(circle at 80% 10%, rgba(70,168,243,0.25), transparent 50%), radial-gradient(circle at 50% 80%, rgba(236,94,35,0.2), transparent 60%)",
      },
      boxShadow: {
        "glow-ember": "0 0 25px rgba(236,94,35,0.25)",
        "glow-arcane": "0 0 30px rgba(127,124,255,0.25)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        pulseRing: {
          "0%": { transform: "scale(0.9)", opacity: "0.7" },
          "70%": { transform: "scale(1.25)", opacity: "0" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 12s ease-in-out infinite",
        pulseRing: "pulseRing 8s ease-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
