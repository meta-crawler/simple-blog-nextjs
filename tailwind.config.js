/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        primary: '0px 4px 4px 1px rgba(0, 0, 0, 0.08)',
      },
      transitionDuration: {
        300: '300ms',
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
    },
  },
  variants: {},
  plugins: ['@tailwindcss/forms'],
};
