import type { Config } from "tailwindcss";

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
      colors: {
        "light-on-background": "#1D1B20",
        "dark-primary": "#D0BCFF",
        "dark-on-primary": "#381E72",
        "dark-primary-container": "#4F378B",
        "dark-outline": "#938F99",
        "dark-outline-variant": "#49454F",
        "dark-on-secondary": "#332D41",
        "light-secondary": "#625B71",
        "dark-on-secondary-container": "#E8DEF8",
        "dark-on-surface": "#E6E0E9",
        "dark-surface-container-highest": "#36343B",
        "dark-surface-container-low": "#1D1B20",
        "dark-surface": "#141218"
      },
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
