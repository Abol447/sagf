/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: {
        default: '0rem',
        sm:'1rem',
        xl: '108px',
      }
    },
    extend: {
      fontFamily: {
        'shabnam' : ['"shabnam"'],
        'Shabnam-Bold' : ['"Shabnam-Bold"'],
        'Shabnam-Light' : ['"Shabnam-Light"'],
        'Shabnam-Medium' : ['"Shabnam-Medium"'],
        'Shabnam-Thin' : ['"Shabnam-Thin"'],
      },
      backgroundImage:{
        'headerback': "url('../picture/header/Photo.png'),linear-gradient(to bottom , rgb(33, 33, 33) , transparent)"
      },
      colors: {
        primery:'#CB1B1B',
        shade: {
          1:'#B41818',
          2:'#9E1515',
          3:'#871212',
          4:'#700F0F',
          5:'#5A0C0C',
          6:'#430909',
        },
        tint: {
          1:'#FDF1F1',
          2:'#FCE8E8',
          3:'#F9D2D2',
          4:'#F6BBBB',
          5:'#FCA197',
          6:'#F66262',
          7:'#E43434',
        },
        gray: {
          1:'#FAFAFA',
          2:'#F9F9F9',
          3:'#EDEDED',
          4:'#E1E1E1',
          5:'#D9D9D9',
          6:'#CBCBCB',
          7:'#ADADAD',
          8:'#909090',
          9:'#717171',
          10:'#505050',
          11:'#353535',
          12:'#212121',
          13:'#121212',
        },
      },
    },
  },
  plugins: [],
}

