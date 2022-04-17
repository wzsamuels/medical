import styled from 'styled-components';
import Image from 'next/image'

const ImageStyled = styled(Image)`
  border-radius: 6px;
  display: inline-block;
  box-shadow: 0 16px 38px -12px rgb(0 0 0 / 56%), 0 4px 25px 0px rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(0 0 0 / 20%);
  background-color: ${props => props.theme.colors.cardBackground};
`

const ImageWrapper = styled.div`
  position: relative;
  width: 95%;
  max-width: 800px;
  margin: 1em auto;
`

export {ImageWrapper}

export default ImageStyled