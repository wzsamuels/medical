import styled from 'styled-components';

export const DropdownButton = styled.div`
  border: none;
  outline: none;
  color: ${props => props.theme.colors.navBarText};
  padding: .875rem 1rem;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
  font-size: 1rem;
`

export const DropdownContent = styled.div`
  display: none;
  position: absolute;
  right: 0;
  top: ${props => props.theme.layout.navBarHeight};
  background-color: ${props => props.theme.colors.navBar};
  min-width: 160px;
  box-shadow: 0 .5em 1em 0 rgba(0,0,0,0.2);
  z-index: 1;

  button, a {
    float: none;
    color: ${props => props.theme.colors.navBarText};
    padding: .875rem 1rem;
    text-decoration: none;
    display: block;
    text-align: left;
    cursor: pointer;
    width: 100%;
  }

  a:hover {
    background-color: ${props => props.theme.colors.dropdownHover};
    color: ${props => props.theme.colors.dropdownHoverText};
  }
`

export const Dropdown = styled.div`
  overflow: hidden;
  float: left;
  &:hover ${DropdownButton} {
    color: ${props => props.theme.colors.navBarHover};
    -webkit-box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);
    box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);
  }

  &:hover ${DropdownContent} {
    display: block;
  }
`