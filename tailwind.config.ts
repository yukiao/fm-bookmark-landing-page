import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import { white, transparent } from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "soft-blue": "#5368df",
      "soft-red": "#fa5757",
      "grayish-blue": "#9194a1",
      "very-dark-blue": "#252b46",
      white,
      transparent,
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
        html: {
          color: theme("colors.very-dark-blue"),
        },
      });
    }),
  ],
};
export default config;
