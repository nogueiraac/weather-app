/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontSize: {
      sm: ['0.875rem', {
        lineHeight: '1'
      }],
      base: ['1rem', {
        lineHeight: '1'
      }],
      xl: ['1.25rem', {
        lineHeight: '1'
      }],
      '2xl': ['1.5rem', {
        lineHeight: '1'
      }],
      '3xl': [' 1.875rem', {
        lineHeight: '1'
      }],
      '4xl': ['2.25rem', {
        lineHeight: '1'
      }],
      '5xl': ['3rem', {
        lineHeight: '1'
      }],
      '8xl': ['6rem', {
        lineHeight: '1'
      }],
      '9xl': ['8rem', {
        lineHeight: '1'
      }],
      '400xl': ['25rem', {
        lineHeight: '1'
      }],
    },
    extend: {
      animation: {
        'horizontal-slow': 'horizontal 30s linear infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        horizontal: {
          '0%, 100%': {transform: 'translateX(0)'},
	        '10%, 30%, 50%, 70%, 90%': {transform: 'translateX(-40px)'},
	        '20%, 40%, 60%, 80%': {transform: 'translateX(0px)'}
        },
      },
      fontFamily: {
        'sans': ['Inter', 'sans'],
      },
      screens: {
        '-2xl': { max: '1200px'},
        // => @media (min-width: 640px) { ... }
  
        '-xl': { max: '991px'},
        // => @media (min-width: 768px) { ... }
  
        '-lg': { max: '768px'},
        // => @media (min-width: 1024px) { ... }
  
        '-md': { max: '600px'},
        // => @media (min-width: 1280px) { ... }
  
        '-sm': { max: '480px'},
        // => @media (min-width: 1280px) { ... }
      }
    },
  },
  plugins: [],
}
