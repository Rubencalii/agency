/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#18181B',
          light: '#F4F4F5',
        },
        accent: '#4F46E5',
        text: {
          DEFAULT: '#F4F4F5',
          light: '#18181B',
        },
        muted: {
          DEFAULT: '#A1A1AA',
          light: '#52525B',
        },
        border: {
          DEFAULT: '#27272A',
          light: '#E4E4E7',
        },
        secondary: '#F59E42',
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
