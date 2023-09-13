/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        primary: '0px 4px 4px 1px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  variants: {},
  plugins: ['@tailwindcss/forms'],
};
