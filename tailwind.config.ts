import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brandColor: "#FD6F00",
        bgGray: "#EDECEC",
        bgDark: "#1E1E1E",
        bgLight: "#fff",
      },
      fontSize: {
        "text-sm": ["14px", "18px"],
        "text-base": ["16px", "28px"],
        "text-md": ["18px", "21px"],
        "text-lg": ["21px", "31.5px"],
        "text-lg2": ["19px", "28.5px"],
        "text-xl": ["24px", "36px"],
        "text-2xl": ["32px", "48px"],
        "text-3xl": ["48px", "58px"],
        "text-4xl": ["65px", "98px"],
        "text-heading": ["100px", "120px"],
      },

      screens: {
        xs: "640px",
        sm: "768px",
        md: "1024px",
        lg: "1280px",
        xl: "1440px",
        "2xl": "1536px",
      },
      fontFamily: {
        popins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
} satisfies Config;
