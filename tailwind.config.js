/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './templates/*.liquid',
    './assets/*.liquid',
    './**/*.liquid',
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#2B348B',
        'custom-blue-light': '#89b9e4',
        'custom-color-bg': '#fff9e9',
        'custom-green': '#216639',
        'custom-green-light': '#8dcb83',
        'custom-orange': '#f0502b',
        'custom-orange-light': '#f9a876',
        'custom-yellow': '#d58b30',
        'custom-yellow-light': '#f8d171',
        'custom-pink': '#bf1f41',
        'custom-pink-light': '#f697b4',
      },
      fontFamily: {
        lastik: ['Lastik'],
        inter: ['Inter']        
      },
    },
  },
  plugins: [
  ],
};