import styled from 'styled-components';

const Card = styled.div`
  color: ${props => props.theme.colors.cardText};
  background-color: ${props => props.theme.colors.cardBackground};
  
  overflow-wrap: break-word;
  
  padding: 1em;
 // margin: 1em 1em;
  width: calc(100% - 1em);
  max-width: 600px;
  border-radius: 6px;
  box-shadow: 0 16px 38px -12px rgb(0 0 0 / 56%), 0 4px 25px 0px rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(0 0 0 / 20%);
  
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