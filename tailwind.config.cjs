/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'mulish': ['Mulish', 'sans-serif'],
        'fatface': ['Abril Fatface', 'sans-serif'],
      },
    }
  },
  plugins: []
};
