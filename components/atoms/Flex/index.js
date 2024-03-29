import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  
  &.center {justify-content: center; align-items: center}

  &.margin {
    & > * {
      margin: .5em;
    }
  }
`

export default Flex