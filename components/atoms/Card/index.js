import styled from 'styled-components';

const Card = styled.div`
  color: ${props => props.theme.colors.cardText};
  background-color: ${props => props.theme.colors.cardBackground};
  
  overflow-wrap: break-word;
  
  padding: 1em;
  margin: 1em 1em;
  width: 95%;
  max-width: 600px;
  border-radius: 6px;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 20%), 0 1px 5px 0 rgb(0 0 0 / 12%);
  
  &.active {
    cursor: pointer;
    opacity: 100%;
    border: 3px solid ${props => props.theme.colors.cardActiveBorder} ;
  }
  
  &.not-active {
    cursor: pointer;
    opacity: 50%;
  }
`

export default Card