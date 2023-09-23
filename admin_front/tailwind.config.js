/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        "cream-bg": "#F5EBDD",
        "black-text": "#393939",
        "green-ok": "#98D588",
        "red-cancel": "#EE6A5B",
        "dark-red-cancel": "#9E1F11",
        "purple-btn": "#D692F6",
        "dark-purple-highlight": "#6E0C86",
        "neutral": "#A3A0A0",
      },
    },
  },
  plugins: [],
};
