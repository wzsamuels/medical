import styled from 'styled-components';

const Input = styled.input`
  &input:not([type='checkbox']) {
    padding: .5em;
    max-width: 100%;
    width: 100%;
  }

  background-color: transparent;
  border-color: ${props => props.theme.colors.inputNoFocus};
  border-width: 1px;
  border-style: solid;
  border-radius: 2px;
  box-shadow: 0 5px 15px 0 #0B0B19;
  color: ${props => props.theme.colors.text};

  &:focus {
    outline: none !important;
    border-color: ${props => props.theme.colors.accordion};
  }
`

export default Input