import styled, {keyframes} from 'styled-components'

const leftIn = keyframes`
  from {
    left: -500px;
  }
  to {
    left: 0;
  }
`

const LeftIn = styled.div`
  position: relative;
  animation: .50s ${leftIn} ease-in;
`

export default LeftIn