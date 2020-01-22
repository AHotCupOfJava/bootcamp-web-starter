// Add global styles and fonts here
import WebFont from 'webfontloader'

WebFont.load({
  google: {
    families: ['Montserrat', 'sans-serif'],
  },
})
const theme = {
  colors: {
    navbar: '#0C1034',
    link: '#73C6B6 ',
    static: '#D1F2EB',
    hovered: '#73C6B6',
  },
  fonts: {
    body: {
      h1: '40px',
      color: '#000000',
      headerweight: 500,
      size: '15px',
      larger: '16px',
      fontfamily: 'antic',
    },
    header: {
      h1: '40px',
      color: '#FFFFFF',
      headerweight: 500,
      size: '15px',
      larger: '3em',
      family: 'Montserrat',
    },
  },
}

export default theme
