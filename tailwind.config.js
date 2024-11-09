/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        'headline1': ['2.25rem', { lineHeight: '2.5rem', fontWeight: '700' }], // Customize as needed
        'headline2': ['2rem', { lineHeight: '2.25rem', fontWeight: '600' }],
        'headline3': ['1.75rem', { lineHeight: '2rem', fontWeight: '500' }],
        'title1': ['1.5rem', { lineHeight: '1.75rem', fontWeight: '700' }],
        'title2': ['1.25rem', { lineHeight: '1.5rem', fontWeight: '600' }],
        'title3': ['1.125rem', { lineHeight: '1.25rem', fontWeight: '500' }],
        'label1': ['1rem', { lineHeight: '1.25rem', fontWeight: '700' }],
        'label2': ['0.875rem', { lineHeight: '1rem', fontWeight: '600' }],
        'label3': ['0.75rem', { lineHeight: '1rem', fontWeight: '500' }],
        'body1': ['1rem', { lineHeight: '1.5rem', fontWeight: '400' }],
        'body2': ['0.875rem', { lineHeight: '1.25rem', fontWeight: '400' }],
        'body3': ['0.75rem', { lineHeight: '1rem', fontWeight: '400' }],
      },
      colors: {
        primary: {
          50: '#fcdf9d',
          100: '#f2bd7b',
          200: '#f7b75a',
          300: '#eaa643',
          400: '#fe9d27',
          500: '#fe8c03',
          600: '#de7a01',
          700: '#d57400',
          800: '#af3f11',
          900: '#9d3a1a',
          950: '#a33411',
        },
        secondary: {
          50: '#f1d4da',
          100: '#e6879a',
          200: '#d84b67',
          300: '#ac2f48',
          400: '#841e32',
          500: '#58111f',
          600: '#450c17',
          700: '#3b0912',
          800: '#2e0910',
          900: '#2f0810',
          950: '#23060b',
        },
        tertiary: {
          50: '#E6F6F8',
          100: '#69D9ED',
          200: '#00B2D2',
          300: '#0096B1',
          400: '#02798F',
          500: '#005362',
          600: '#003D48',
          700: '#0d212f',
          800: '#0a1a25',
          900: '#07151D',
          950: '#051016',
        },
        lightYellow: '#FFF1D4',
        green: '#24C024',
        brightYellow: '#FFE100',
        red: '#D81A13',
      }
    },
  },
  plugins: [],
}

