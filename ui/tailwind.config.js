/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{html,js,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      xsm: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1720px",
    },
    extend: {
      flex: {
        sidebarFullWidth: "0 0 15.9375rem",
        sidebarShortWidth: "0 0 3.75rem",
      },
      spacing: {
        sidebarFullWidth: "15.9375rem",
        sidebarShortWidth: "3.75rem",
        footerHeight: "2rem",
        2.25: "0.563rem", //9px
        2.5: "0.625rem", //10px
        3.75: "0.938rem", //15px
        4.5: "1.125rem", //18px
        7.5: "1.875rem", //30px
        13: "3.25rem", //52px
      },
      fontFamily: {
        clearSans: ["ClearSans"],
        clearSansMedium: ["ClearSansMedium"],
        dfxicons: ["dfxicons"],
      },
      boxShadow: {
        input: "0 0px 1px 0px ",
      },
      borderRadius: {
        sm: "5px",
        lg: "20px",
      },
      colors: {
        primary: "#0057FF",
        "primary-dark": "#0046CC",
        orange: "#FF7A00",
      },
      fontSize: {
        xxs: ["9px", { lineHeight: "120%" }],
        xs: ["0.75rem", { lineHeight: "120%" }],
        sm: ["0.875rem", { lineHeight: "120%" }],
        base: ["1rem", { lineHeight: "120%" }],
        lg: ["1.125rem", { lineHeight: "120%" }],
        "2xlg": ["19px", { lineHeight: "120%" }],
        xl: ["1.25rem", { lineHeight: "120%" }],
        "2xl": ["1.5rem", { lineHeight: "120%" }],
        "3xl": ["1.875rem", { lineHeight: "120%" }],
        "3xxl": ["2rem", { lineHeight: "120%" }],
        "4xl": ["2.25rem", { lineHeight: "120%" }],
        "5xl": ["2.5rem", { lineHeight: "120%" }],
        "6xl": ["3rem", { lineHeight: "120%" }],
        "7xl": ["4.5rem", { lineHeight: "120%" }],
        "8xl": ["6rem", { lineHeight: "120%" }],
        "9xl": ["8rem", { lineHeight: "120%" }],
      },
      fontWeight: {
        thin: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
      scale: {
        25: "0.25",
      },
    },
  },
  plugins: [],
};
