import styled from 'styled-components';

const Input = styled.input`
  &:not([type='radio'], [type='check']) {
    padding: .5em;
    max-width: 100%;
    width: 100%;
    box-shadow: 0 1px 3px 0 rgba(25, 25, 35, 0.5);

  }

  background-color: transparent;
  border-color: ${props => props.theme.colors.inputNoFocus};
  border-width: 1px;
  border-style: solid;
  border-radius: 2px;

  color: ${props => props.theme.colors.text};

  &:focus {
    outline: none !important;
    border-color: ${props => props.theme.colors.accordion};
  }
`

export default Input