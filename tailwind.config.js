/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'komma': {
          'navy': '#293266',
          'navy-dark': '#1e2650',
          'navy-light': '#3d4a8a',
          'fuchsia': '#eb088d',
          'fuchsia-dark': '#c4076f',
          'fuchsia-light': '#ff2da6',
        }
      },
      fontFamily: {
        'display': ['Outfit', 'system-ui', 'sans-serif'],
        'sans': ['DM Sans', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '7xl': ['4.5rem', { lineHeight: '1.1' }],
        '8xl': ['6rem', { lineHeight: '1.05' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
    },
  },
  plugins: [],
}

