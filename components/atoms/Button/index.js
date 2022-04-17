import styled from 'styled-components';

const Button = styled.button`
  appearance: none;
  font-size: 1em;
  font-family: inherit;
  cursor: pointer;
  border-radius: 1em;
  padding: .5em 1em;
  background-color: ${(props) => props.theme.colors.button};
  color: ${props => props.theme.colors.buttonText};
  border: ${(props) => props.theme.colors.button} 2px solid;

  &:hover {opacity: .8};
  &:disabled {
    opacity: .3;
    cursor: initial;
  };
`;

const ButtonLink = styled.a`
  text-decoration: none;
  font-size: 1em;
  border-radius: 1em;
  padding: .5em 1em;
  background-color: ${(props) => props.theme.colors.button};
  color: ${props => props.theme.colors.buttonText};
  border: ${(props) => props.theme.colors.button} 2px solid;

  &:hover {opacity: .8};
  &:disabled {
    opacity: .3;
    cursor: initial;
  };
`

const CTAButton = styled(Button)`
  appearance: none;
  width: 90%;
  max-width: 800px;
  border: none;
  background-color: ${props => props.theme.colors.ctaButton};
  color: ${props => props.theme.colors.buttonText};
  padding: .5em 1em;
  text-decoration: none;
  text-align: center;
`

export {CTAButton, ButtonLink}
export default Button;