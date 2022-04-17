import styled from 'styled-components';

const TextArea = styled.textarea`
  max-width: 100%;
  width: 200px;
  background-color: transparent;
  appearance: none;
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

export default TextArea