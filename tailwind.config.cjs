/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        Blue: "#007bff",
        Indigo: "#6610f2",
        Purple: "#6f42c1",
        Pink: "#e83e8c",
        Red: "#dc3545",
        Orange: "#fd7e14",
        Yellow: "#ffc107",
        Green: "#28a745",
        Teal: "#20c997",
        Cyan: "#17a2b8",
        White: "#fff",
        Gray: "#6c757d",
        Gray_dark: "#343a40",
        Primary: "#007bff",
        Secondary: "#6c757d",
        Success: "#28a745",
        Info: "#17a2b8",
        Warning: "#ffc107",
        Danger: "#dc3545",
        Light: "#f8f9fa",
        Dark: "#343a40",
      },
      screens: {
        breakpoin_xs: " 0",
        breakpoin_sm: "576px",
        breakpoin_md: "768px",
        breakpoin_lg: "992px",
        breakpoin_xl: "1200px",
      },
      fontFamily: {
        flaticon: "Flaticon",
      },
    },
  },
  plugins: [],
};
