module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        hailoPink: '#FF77C0',
        deep: '#0b0c10'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')],
}
