import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // text: ["Open Sans", "sans-serif"],
        heading: ["Pentron"],
        prenton: ["Pentron", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
