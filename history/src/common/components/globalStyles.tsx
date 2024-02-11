import {createGlobalStyle} from 'styled-components'


const GlobalStyles = createGlobalStyle`
  html, body, #root {
    height: 100%;
    width: 100%;
    overflow: hidden;
    margin: 0;
    padding: 0;
    display: flex !important;
  }
`


export default GlobalStyles
