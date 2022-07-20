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
                500: "#00B37E"
            },
            gray: {
                700: "#BFBFBF",
                800: "#242428",
                900: "#101010"
            }
        }
    },
  },
  plugins: [],
}
