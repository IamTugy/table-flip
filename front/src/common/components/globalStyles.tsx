import {createGlobalStyle} from 'styled-components'


const GlobalStyles = createGlobalStyle`
  html,body, #root {
    overflow: hidden;
    margin: 0;
    padding: 0;
    display: flex !important;
    width: 100%;
    height: 100%;
  }
`


export default GlobalStyles
