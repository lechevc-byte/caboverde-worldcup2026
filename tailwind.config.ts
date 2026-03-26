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
        "cv-blue": "#003893",
        "cv-red": "#CF2027",
        "cv-gold": "#F5A623",
        "cv-white": "#F5F1E8",
        navy: "#0A1628",
        dark: "#030d18",
        turf: "#1A3D1F",
      },
      fontFamily: {
        bebas: ["var(--font-bebas)"],
        "barlow-cond": ["var(--font-barlow-cond)"],
        barlow: ["var(--font-barlow)"],
      },
    },
  },
  plugins: [],
};
export default config;
