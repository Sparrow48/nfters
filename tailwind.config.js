/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '8xl': '88rem',
        '9xl': '96rem',
      }
    },
    // colors: {
    //   transparent: 'transparent',
    //   current: 'currentColor',
    //   'btnColor': '#3d00b7'
    // }
  },
  plugins: [],
}
