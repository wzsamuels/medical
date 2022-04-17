import styled, {keyframes} from 'styled-components'

const riseUp = keyframes`
  from {
    bottom: -150px;
  }
  to {
    bottom: 0;
    position: fixed;
  }
`

export const BottomIn = styled.div`
  position: relative;
  animation: ${props => props.time} ${riseUp} ease-in;
`