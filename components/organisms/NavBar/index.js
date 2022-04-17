import styled from 'styled-components';

const TopNav = styled.nav`
  background-color: ${(props) => props.theme.colors.navBar};
  color: ${(props) => props.theme.colors.navBarText};
  position: fixed;
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  ${props => props.position === "top" && `top: 0`};
  ${props => props.position === "bottom" && `bottom: 0`};
  width: 100%;
  height: ${props => props.theme.layout.navBarHeight};
  transition: all 0.5s;
  -webkit-box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);
  box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);

  a {
    display: block;
    color: ${props => props.theme.colors.navBarText};
    text-align: center;
    padding: .875rem 1rem;
    text-decoration: none;
    float: left;
  }

  .active {
    color: ${props => props.theme.colors.active};
  }

  .icon {
    float: left;
    padding: .875rem 1rem;
    cursor: pointer;
  }
  
  .logo {
    position: fixed;
    margin-right: 2em;
    cursor: pointer;
  }
  
  .menu {
    display: none;
  }
  
  a:hover {
    color: ${props => props.theme.colors.navBarHover};
    //-webkit-box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);
    //box-shadow: 0 1px 5px 0 rgb(0 0 0 / 12%);
  }
  
  button {
    appearance: none;
    color: ${props => props.theme.colors.navBarText};
    text-align: center;
    padding: .875rem 1rem;
    text-decoration: none;
    border: none;
    background-color: ${props => props.theme.colors.navBar};
  }

  z-index: 10;

  @media screen and (max-width: 600px) {
    .logo {
      position: inherit;
    }

    .show {
      display: block;
    }

    .hide {
      display: none;
    }

    .menu {
      display: block;
    }
  }

  @media screen and (max-width: 750px) {
    justify-content: left;
    .logo {
      position: inherit;
      margin-right: 1em;
    }
  }
`
export default TopNav