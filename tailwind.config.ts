import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inconsolata"],
      },
      colors: {
        primary: "#F0FFF0",
        secondary: "#696969",
        accent: "#10B981",
      },
    },
  },
  darkMode: "class", // or 'media'
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-dark-mode"),
  ],
} satisfies Config;
