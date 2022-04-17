import styled from 'styled-components'

export const Drawer = styled.div`
  display: ${props => props.open ? 'block' : 'none'};
  position: fixed; /* Stay in place */
  z-index: 10; /* Sit on top */

  //padding-top: 100px; /* Location of the box */
  margin:0;
  left: 0;
  top: 0;
  width: 100vw; /* Full width */
  height: 100vh; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  // Display an opaque black background if the drawer is open. Remove it as soon as it starts to close.
  background-color: ${props => props.closing ? 'transparent' : 'rgba(0,0,0)'};
  background-color: ${props => props.closing ? 'transparent' : 'rgba(0,0,0,0.4)'}; 
`

export const DrawerContent = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  overflow: auto; /* Enable scroll if needed */
  background-color: ${props => props.theme.colors.drawer};
  color: ${props => props.theme.colors.drawerText};
  margin: auto;
  width:  ${props => props.theme.layout.drawerWidth};
  height: 100%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);

  //animation-fill-mode: forwards;

  &.OpenDrawer {
    -webkit-animation: SlideIn 0.4s;
    animation: SlideIn 0.4s;
  }

  &.ClosedDrawer {
    -webkit-animation: SlideOut 0.4s;
    animation: SlideOut 0.4s;
  }

  @-webkit-keyframes SlideIn {
    from {left:-300px; opacity:0}
    to {left:0; opacity:1}
  }

  @keyframes SlideIn {
    from {left:-300px; opacity:0}
    to {left:0; opacity:1}
  }

  @-webkit-keyframes SlideOut {
    from {left: 0; opacity:1}
    to {left:-300px; opacity:0}
  }

  @keyframes SlideOut {
    from {left: 0; opacity:1}
    to {left:-300px; opacity:0}
  }
`;

const DrawerHeader = styled.div`
  //position: absolute;
  display: flex;
  //justify-content: space-between;
  margin: 0;
  padding: 0;
  top: 0;
  width: 100%;
  height: ${props => props.theme.layout.navBarHeight};
  
  * {
    cursor: pointer;
  }

  a {
    display: block;
    color: ${props => props.theme.colors.active};
    text-align: center;
    padding: .875rem 1rem;
    text-decoration: none;
    float: left;
  }

  button {
    appearance: none;
    color: ${props => props.theme.colors.drawerText};
    text-align: center;
    padding: .875rem 1rem;
    text-decoration: none;
    border: none;
    background-color: ${props => props.theme.colors.drawer};
  }
`

const DrawerItem = styled.a`
  float:left;
  width:100%;
  padding: 14px 16px;
  text-decoration:none;

  &:hover {
    color: ${props => props.theme.colors.drawerHoverText} !important;
    background-color: ${props => props.theme.colors.drawerHover} !important;
    
`

const DrawerFooter = styled.div`
  position: absolute;
  width:100%;
  bottom: 5px;
  padding: 1em;
  font-size: .75em;
`

const DrawerDropdown  = styled.div`
  float:left;
  width:100%;
  padding: 14px 16px;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.colors.textOnDark} !important;
    background-color: ${props => props.theme.colors.navBarHover} !important;
`

export {DrawerItem, DrawerFooter, DrawerDropdown, DrawerHeader}