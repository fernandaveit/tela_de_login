/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        verde: {
            principal: '#1E9E6A',
            fundo: '#F3FFF2',
            inputs: '#F7FAFC'                            
        },
    },
    fontFamily: {
        archivo: ['Archivo', 'sans-serif']
    },
    screens: {
        '2xl': '1920px',
    }
    },
  },
  plugins: [],
}

