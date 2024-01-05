/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      'white': '#FFFFFF',
      'black': '#242424',
      'grey': '#F3F3F3',
      'dark-grey': '#6B6B6B',
      'red': '#FF4E4E',
      'transparent': 'transparent',
      'twitter': '#1DA1F2',
      'purple': '#8B46FF',
    },
    extend: {
      backgroundImage: {
        'pink-gradient': 'linear-gradient(118deg, rgba(198, 123, 254, 0.12) 12%, #F17383 98.16%)'
      },
      fontFamily: {
        inter: ["'Inter'", "sans-serif"],
        gelasio: ["'Gelasio'", "serif"]
      },
    },
  },
  plugins: [],
};
