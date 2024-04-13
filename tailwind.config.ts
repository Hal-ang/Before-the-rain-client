import type { Config } from "tailwindcss";
import { colors } from "@/styles/colors";

const { range } = require("lodash");

const pxToRem = (px: number, base = 16) => `${px / base}rem`;

const extendedPxr = {
  ...range(1, 300).reduce((acc: { [key: string]: string }, px: number) => {
    acc[`${px}pxr`] = pxToRem(px);
    acc[`${px + 0.5}pxr`] = pxToRem(px + 0.5);
    return acc;
  }, {})
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors,
      spacing: extendedPxr,
      fontSize: extendedPxr,
      lineHeight: extendedPxr,
      borderRadius: extendedPxr,
      maxWidth: extendedPxr,
      minWidth: extendedPxr,
      minHeight: extendedPxr,
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      }
    }
  },
  plugins: []
};
export default config;
