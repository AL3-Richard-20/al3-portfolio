const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: '10rem',
    },
    extend: {},
  },
  plugins: [
    plugin(function({ addVariant }) {
      // addVariant('white', '.white &')
      // addVariant('dark', '.dark &')
      // addVariant('accent', '.accent &')
      addVariant('white', '.white &');
      // addVariant('gray', '.gray &');
      addVariant('accent', '.accent &');
    })
  ],
  // darkMode: [
  //   ['selector', '[data-mode="dark"]'],
  //   ['selector', '[data-mode="accent"]']
  // ],
}

