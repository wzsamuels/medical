import styled from 'styled-components';

const Select = styled.select`
  width: 50%;
  height: 100%;
  padding: 0;
  border: none;
  margin: auto;
  background-color: ${props => props.theme.colors.cardBackground};
  color: ${props => props.theme.colors.text};
  resize: vertical;
  outline: none !important;
`

export default Select