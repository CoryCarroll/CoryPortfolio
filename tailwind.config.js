/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins'],
        'oswald': ['Oswald'],
        'protest-guerrilla-regular': ['Protest-Guerrilla'],
        'protest-strike': ['Protest-Strike'],
        'kode+mono': ['Kode Mono'],
        'merriweather': ['Merriweather']
      }
    },
  },
  plugins: [],
}
