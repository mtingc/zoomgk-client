/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      fontWeight: {
        'extralight': 200,
        'light': 300,
        'bold': 700,
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'zgk-100': '#d69f7e',
        'zgk-200': '#cd9777',
        'zgk-300': '#c38e70',
        'zgk-400': '#b07d62',
        'zgk-500': '#9d6b53',
        'zgk-600': '#8a5a44',
        'play-100': '#f96f5d',
        'play-200': '#d85b52',
        'zgk-bk': '#161616',
      },
    },
  },
  plugins: [],
}
