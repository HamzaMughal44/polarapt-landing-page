import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-red": "#FF3622",
        "brand-orange": "#FC8602",
        "brand-yellow": "#FCB505",
        "brand-green": "#45BE00",
        "brand-blue": "#0F87C6",
        cream: "#FFFFFF",
        ink: "#1F1B16",
        "ink-muted": "#5B5346",
        "ink-faint": "#8A8375",
        "brand-red-tint": "#FFF3F1",
        "brand-orange-tint": "#FFF3E6",
        "brand-yellow-tint": "#FFF8E1",
        "brand-green-tint": "#EEFAE3",
        "brand-blue-tint": "#E7F4FB",
      },
      fontFamily: {
        sora: ["var(--font-sora)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
