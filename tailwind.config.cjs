/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
        fontFamily: {
            sans: 'Poppins, sans-serif',
          },
          colors: {
            green: {
                400: "#00875F",
                500: "#00B37E"
            },
            gray: {
                600: "#D9D9D9",
                700: "#BFBFBF",
                800: "#242428",
                900: "#101010"
            }
        }
    },
  },
  plugins: [],
}
