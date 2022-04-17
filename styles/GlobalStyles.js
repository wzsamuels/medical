import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    box-sizing: border-box;
    transition: all .5s;
  }
  
  *,
  ::before,
  ::after {
    box-sizing: inherit;
  }

  a {
    color: ${props => props.theme.colors.text};
  }
  
  /*
  body * + * {
    margin-top: 1.5em;
  }
 
   */
  html, body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;

    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    
    background-color: ${(props) => props.theme.colors.background};
    transition: all .5s;
    color: ${props => props.theme.colors.text};
    mix-blend-mode: normal;
    overflow-x: hidden;
  }
  
`;

export default GlobalStyles;