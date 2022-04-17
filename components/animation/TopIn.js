import styled, {keyframes} from 'styled-components'

const fallDown = keyframes`
  from {
    top: -50px;
  }
  to {
    top: 0;
  }
`

export const TopIn = styled.div`
  position: relative;
  animation: ${props => props.time} ${fallDown} ease-in;
`