/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "01n": "url('./src/assets/01n.avif')",
        "02n": "url('./src/assets/03n.avif')",
        "03n": "url('./src/assets/03n.avif')",
        "04n": "url('./src/assets/03n.avif')",
        "09n": "url('./src/assets/09n.avif')",
        "10n": "url('./src/assets/10n.avif')",
        "11n": "url('./src/assets/11n.avif')",
        "01d": "url('./src/assets/01d.avif')",
        "02d": "url('.(src/assets/02d.avif')",
        "03d": "url('./src/assets/03d.avif')",
        "04d": "url('./src/assets/04d.avif')",
        "09d": "url('./src/assets/09d.avif')",
        "10d": "url('./src/assets/09d.avif')",
        "11d": "url('./src/assets/11d.avif')",
      },
    },
  },
  plugins: [],
};
