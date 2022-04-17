import styled from 'styled-components';

const BackgroundImage = styled.div`
  position: relative;
  top: 0;
  left: 0;
  height:100%;
  width: 100%;
  z-index: 0;
`

const BackgroundImageCSS = styled.header`
  background-image: url(${props => props.image});
  background-color: #cccccc;
  height: 60vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  z-index: 5;
`

export {BackgroundImage, BackgroundImageCSS}