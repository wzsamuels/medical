import styled from 'styled-components'

// TODO: switch from px to em
const ContentWrapper = styled.div`
  padding-top: 50px;
  padding-bottom: 200px;
  
  @media screen and (min-width: 550px) {
    padding-bottom: 184px;
  }
  width: 100%;
`

export default ContentWrapper