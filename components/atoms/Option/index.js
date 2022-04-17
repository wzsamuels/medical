import styled from 'styled-components';

const Option = styled.option`
  padding: 8px;
  margin: 0 1rem 0 1rem;
  white-space: normal;
  height: 2rem;
  text-align: center;
  width: 100%;
  background-color:  ${props => props.theme.colors.cardBackground};
  color: ${props => props.theme.colors.text} !important;
  
  &:hover,
  &:focus,
  &:focus-within,
  &:focus-visible,
  &:active {
    background: radial-gradient(${props => props.theme.colors.select}, ${props => props.theme.colors.select});
    background-color: ${props => props.theme.colors.select} !important; 
    color: ${props => props.theme.colors.text} !important;
  }

  &:checked {
    background: radial-gradient(${props => props.theme.colors.select},${props => props.theme.colors.select});
    background-color: ${props => props.theme.colors.select} !important; 
    color: ${props => props.theme.colors.text} !important;
  }
`

export default Option