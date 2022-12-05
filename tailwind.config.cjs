/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.tsx',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32,
      '5xl': '3rem',
      '6xl': '3.75rem',
      '8xl': 96,
    },

    colors: {
      
      gray: {
        900: '#121214',
        800: '#202024',
        400: '#7c7c8a',
        200: '#c4c4cc',
        100: '#e1e1e6',
      },

      cyan: {
      500 : '#81d8f7',
      300 : '#9be1fb',
      },

      black : '#000',
      white : '#fff',


      dblue: {
        900: '#001D27',
        300: '#027196',
      },

      transparent: 'transparent',
    },

    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif',
        h1: 'Dancing Script, sans-serif',
        h2: 'Oswald, sans-serif',
      },
      backgroundImage: {
        'noruega': "url('noruega.png')",
        'noruegasm': "url('noruega2.png')",

        'berlim': "url('berlim.png')",
        'berlimsm': "url('berlim2.png')",
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
