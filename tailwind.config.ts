import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0B0A09",
          2: "#131110",
          3: "#1A1613",
        },
        brand: {
          orange: "#F26A2A",
          bright: "#FF8C42",
          ember: "#FF7A1A",
        },
        paper: "#ECE8E1",
        muted: "#A69F97",
        faint: "#6E6862",
      },
      fontFamily: {
        display: ["var(--font-anton)", "sans-serif"],
        sans: ["var(--font-archivo)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        site: "1200px",
      },
    },
  },
  plugins: [],
};
export default config;
