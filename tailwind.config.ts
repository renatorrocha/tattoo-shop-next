import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        londrina: ["var(--font-londrina-solid)"],
        island: ["var(--font-island-moments)"],
      },
      colors: {
        headings: "#FFFFFF",
        typography: "#CCCCCC",
        muted: "#636363",
        "brand-color": "#FFD911",
        background: "#191919",
        footer: "#161616",
      },
    },
  },
  plugins: [],
};
export default config;
