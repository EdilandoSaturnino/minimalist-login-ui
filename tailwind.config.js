/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-color': '#1E9E6A',
        'dark-10': '#1A202C',
        'dark-20': '#656769',
        'dark-30': '#E8E8E8',
        'dark-40': '#F7FAFC',
        'light-green': '#F3FFF2', 
      },
    },
  },
  plugins: [],
}
