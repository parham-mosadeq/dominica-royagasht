/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'clr-purple-main': '#64104e',
        'clr-yellow-main': '#ffcb05',
        'clr-blue-main': '#d1ecf1',
        'clr-yellow-second': '#856404',
        'clr-red-main': '#721c24',
      },
    },
  },
  plugins: [],
};
