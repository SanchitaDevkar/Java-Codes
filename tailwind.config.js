/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        light: "rgba(83, 157, 243, 0.37)",
        gray: {
          "100": "#908a94",
          "200": "#040404",
          "300": "rgba(0, 0, 0, 0.55)",
          "400": "rgba(255, 255, 255, 0.8)",
          "500": "rgba(4, 4, 4, 0.85)",
          "600": "rgba(144, 138, 148, 0.13)",
          "700": "rgba(0, 0, 0, 0.76)",
        },
        royalblue: {
          "100": "#407bff",
          "200": "#1779f3",
        },
        dimgray: "#636366",
        black: "#000",
        dodgerblue: "#5994ff",
        gainsboro: "#d9d9d9",
        darkslategray: "#263238",
        "bgcolor-lightprimary": "#e8f2fe",
      },
      spacing: {},
      fontFamily: {
        montserrat: "Montserrat",
      },
      borderRadius: {
        "81xl": "100px",
        mini: "15px",
        xl: "20px",
        "8xs": "5px",
        "3xs": "10px",
      },
    },
    fontSize: {
      sm: "14px",
      xs: "12px",
      base: "16px",
      "3xs": "10px",
      "5xl": "24px",
      mini: "15px",
      inherit: "inherit",
    },
    screens: {
      mq399: {
        raw: "screen and (max-width: 399px)",
      },
      mq398: {
        raw: "screen and (max-width: 398px)",
      },
      mq370: {
        raw: "screen and (max-width: 370px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
