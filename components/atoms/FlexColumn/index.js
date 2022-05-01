import styled from 'styled-components';

const FlexColumn = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  
  &.center { align-items: center; align-content: center}
  
  &.margin {
    padding: 0 .5em;
    & > * {
      margin: 1em;
    }
  }
`

export default FlexColumn