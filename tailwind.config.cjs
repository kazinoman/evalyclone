/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: { preflight: false }, // a set of base styles that are designed to smooth over cross-browser inconsistencies.
  important: true,
  autoprefixer: {},
};
