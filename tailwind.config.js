/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0B0B0C',
        accent: '#C9A227',
        text: '#FFFFFF',
        muted: '#B3B6BD',
        border: '#1A1B1E',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        xl: '12px',
      },
      boxShadow: {
        gold: '0 10px 30px rgba(0,0,0,.25)',
      },
      container: {
        center: true,
        padding: '2rem',
        screens: {
          lg: '1160px',
        },
      },
    },
  },
  plugins: [],
};
