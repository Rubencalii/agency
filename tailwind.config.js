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
        bg: '#18181B', // gris oscuro elegante
        accent: '#4F46E5', // azul violeta moderno
        text: '#F4F4F5', // blanco suave
        muted: '#A1A1AA', // gris claro
        border: '#27272A', // gris medio
        secondary: '#F59E42', // naranja dorado para detalles
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
