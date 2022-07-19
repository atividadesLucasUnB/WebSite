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
            gray: {
                900: "#242428"
            }
        }
    },
  },
  plugins: [],
}
