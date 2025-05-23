/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#001219', // Darkest blue
          800: '#005F73', // Dark blue
          700: '#0A9396', // Teal
          600: '#94D2BD', // Light teal
          500: '#E9D8A6', // Light yellow
          400: '#EE9B00', // Orange
          300: '#CA6702', // Dark orange
          200: '#BB3E03', // Rust
          100: '#AE2012', // Dark rust
          50: '#9B2226',  // Burgundy
        },
      },
    },
  },
  plugins: [],
} 