module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'panda': "url('/static/images/panda_nft.png')",
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
