import styled from 'styled-components';

const IconTab = styled.a`
 flex-direction: column;
 justify-content: center;
 display: block;

 color: ${props=> props.theme.colors.navBarText};
 background-color: ${props=> props.theme.colors.navBar};
 
 width: 50px;
 height: 40px;
 padding: 2px;
 margin: 5px 0;
 text-align: center;
 text-decoration: none;
 border-radius: 5px;
 transition: all .5s linear;
 
 &:hover {
  background-color: ${props => props.theme.colors.navBarHover};
 }

 &.active {
  background-color: ${props => props.theme.colors.active};
  box-shadow: 0 10px 20px -12px rgb(0 0 0 / 42%), 0 3px 20px 0px rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(0 0 0 / 20%);
 }
`

export default IconTab
