import styled, {keyframes} from 'styled-components'

const rightIn = keyframes`
  from {
    right: -500px;
  }
  to {
    right: 0;
  }
`

const RightIn = styled.div`
  position: relative;
  animation: .50s ${rightIn} ease-in;
`

export default RightIn