/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["PoppinsRegular", "sans-serif"], // Define your custom font
      },
      fontWeight: {
        regular: 400, // Define weight names (optional)
        medium: 500,
        semi: 600,
        bold: 700,
      },
    },
  },
  plugins: [],
};
