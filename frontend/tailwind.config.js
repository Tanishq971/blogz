/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        // Right box shadow
        '.shadow-right-sm': {
          boxShadow: '4px 0 6px -1px rgba(0, 0, 0, 0.1), 2px 0 4px -1px rgba(0, 0, 0, 0.06)',
        },
        '.shadow-right': {
          boxShadow: '8px 0 10px -1px rgba(0, 0, 0, 0.1), 4px 0 6px -1px rgba(0, 0, 0, 0.06)',
        },
        '.shadow-right-lg': {
          boxShadow: '12px 0 15px -2px rgba(0, 0, 0, 0.1), 6px 0 10px -2px rgba(0, 0, 0, 0.05)',
        },
        // Left box shadow
        '.shadow-left-sm': {
          boxShadow: '-4px 0 6px -1px rgba(0, 0, 0, 0.1), -2px 0 4px -1px rgba(0, 0, 0, 0.06)',
        },
        '.shadow-left': {
          boxShadow: '-8px 0 10px -1px rgba(0, 0, 0, 0.1), -4px 0 6px -1px rgba(0, 0, 0, 0.06)',
        },
        '.shadow-left-lg': {
          boxShadow: '-12px 0 15px -2px rgba(0, 0, 0, 0.1), -6px 0 10px -2px rgba(0, 0, 0, 0.05)',
        },
      });
    }),
  ],
}