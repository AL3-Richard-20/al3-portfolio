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
    plugin(function({addVariant}) {
      // here is your CSS selector - could be anything
      // in this case it is `.theme` element
      // with `.theme--red` class (both present)
      addVariant('white', '.white &')
      addVariant('dark', '.dark &')
      addVariant('accent', '.accent &')
    })
  ],
  // darkMode: [
  //   ['selector', '[data-mode="dark"]'],
  //   ['selector', '[data-mode="accent"]']
  // ],
}

