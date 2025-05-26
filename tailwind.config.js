/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    /*screens: {
      / *xs: "350px" 30rem,* /
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },*/
    colors: {
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
      primary: "#12495a",
      "primary-alt": "#269bbf",
      secondary: "red",
      white: "#ffffff",
      "primary-bg-1": "#12495a",
      "primary-bg-2": "#79acbc",
      "primary-bg-3": "#eaecec",
      "primary-bg-1-transp": "#12495a80",
      "primary-bg-2-transp": "#79acbc80",
      "primary-bg-3-transp": "#eaecec80",
    },
    fontFamily: {
      sans: ["Verdana", "Arial", "sans-serif"],
      logo: ["Segoe UI", "Tahoma", "Geneva", "Verdana", "sans-serif"],
    },
    extend: {
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
