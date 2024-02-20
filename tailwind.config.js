/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        label: '10px',
        title: '1.625rem', // 26px
      },
      colors: {
        brand: '#211C5C',
        brandAccent: '#ED0E61',
        grey: '#9EA6B4',
      },
      borderRadius: {
        lg: '20px',
      },
      backgroundImage: {
        card: "url('/assets/card-background.png')",
      },
      screens: {
        xs: '350px',
        sm: '400px',
      },
    },
  },
  plugins: [],
}
