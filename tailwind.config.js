/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1d6191',
        'primary-light': '#216fa8',
        'error': '#af104a',
        'error-light': '#c71756',
        'success': '#10af35',
        'success-light': '#1fcb47',
        'info': '#10afa2',
        'info-light': '#28d3c5',
        'info-highlight': '#c8fff3',
      },
    },
  },
  plugins: [],
}

