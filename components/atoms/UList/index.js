import styled from 'styled-components';

const UList = styled.ul`
  * + * {
    margin-top: 1em;
  }
  
  margin: auto;
  padding: 0;
  list-style: none;
`

export default UList