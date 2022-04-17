import styled from 'styled-components'

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: .25em 1em 0 1em;
  background: ${props => props.theme.colors.footer};
  color: ${props => props.theme.colors.footerText};
  box-shadow: 0 -3px 1px -2px rgb(0 0 0 / 20%), 0 -2px 2px 0 rgb(0 0 0 / 14%), 0 -1px 5px 0 rgb(0 0 0 / 12%);

  a {
    color: ${props => props.theme.colors.footerText};
  }
`

export default Footer