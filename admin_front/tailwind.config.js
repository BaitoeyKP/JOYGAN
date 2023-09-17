/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'kanit': ['Kanit', 'sans-serif'],
      }, colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',// text on button
        'purple': '#D692F6',// primary color
        'purple-100': '#A80ECF',// accent color
        'green': '#98D588',// success
        'red': '#EE6A5B',// cancel
        'black': '#393939',//text
        'cream': '#F5EBDD',// background color
        'grey': '#A3A0A0',// neutral text color
        'grey-100': '#737373',
      },
      margin: {
        '68': '265px',
      },
    },

  },
  plugins: [
    require('flowbite/plugin')({
      charts: true,
    })
  ],
}

