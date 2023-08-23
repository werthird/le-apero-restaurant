/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'landing-image': "url('/images/landing-image-2.jpg')",
      },
      fontFamily: {
        'logo': ['nexa-rust-sans-black-2', 'sans-serif']
      },
      colors: {
        'main-color': '#e6dbc4',
        'secondary-color': '#1c130f',
        'accent-color': '#fdefab'
      },
    },
  },
  plugins: [],
}
