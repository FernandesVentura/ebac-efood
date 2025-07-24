import { createGlobalStyle } from 'styled-components'

export const colors = {
  mainColor: '#FFF8F2',
  secondaryColor: '#E66767',
  white: '#FFFFFF',
  footerColor: '#FFEBD9'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: Roboto, sans-serif;
  }

  body {
    background-color: ${colors.mainColor};
    color: ${colors.secondaryColor};
  }

  .container {
    margin: 0 auto;
    max-width: 1024px;
    width: 100%;
    
    @media (max-width: ${breakpoints.desktop}) {
      max-width: 80%;
    }
  }

`
