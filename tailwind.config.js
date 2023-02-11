/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {backgroundImage : {'logo':"url('./assets/logo.png')"}},
    fontFamily:{'serif':['Montserrat']}
  },
  plugins: [require("daisyui")],
}
