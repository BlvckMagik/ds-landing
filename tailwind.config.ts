import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        "48vw": "48vw",
      },
      fontFamily: {
        DelaGothicOne: ["Dela Gothic One", "serif"],
        Montserrat: ["Montserrat", "serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        greenDark: "#14471E",
        greenLight: "#68904DB3",
        grayDark: "#757575",
      },
    },
  },
  plugins: [],
} satisfies Config;
