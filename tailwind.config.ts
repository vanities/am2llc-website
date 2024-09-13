import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Inter"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      colors: {
        primary: "#1E3A8A", // Replace with your chosen colors
        secondary: "#F59E0B",
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
