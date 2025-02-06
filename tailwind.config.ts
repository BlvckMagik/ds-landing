import withMT from "@material-tailwind/react/utils/withMT";

module.exports = withMT({
  darkMode: "selector",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        DelaGothicOne: ["var(--font-dela-gothic-one)", "serif"],
        Montserrat: ["var(--font-montserrat)", "serif"],
        geistSans: ["var(--font-geist-sans)", "sans-serif"],
        geistMono: ["var(--font-geist-mono)", "monospace"],
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
});
