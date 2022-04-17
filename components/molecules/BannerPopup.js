import styled, {keyframes} from 'styled-components';

const riseUp = keyframes`
  from {
    bottom: -150px;
  }
  to {
    bottom: 0;
  }
`

const BannerPopupStyled = styled.div`
  background-color: ${props => props.theme.colors.banner};
  color: ${props => props.theme.colors.cardText};
  border: solid 1px black;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  max-width: 100%;
  z-index: 1000;
  animation: ${props => props.time} ${riseUp} ease-in;
  
  // Center the banner if a custom width prop is given
  @media screen and (min-width: ${props => props.bp}) {
    left: 50%;
    transform: translate(-50%, 0);
  }
`


const BannerPopup = ({children, time, ...props}) => {
  return (
    <BannerPopupStyled time={time} {...props}>
      {children}
    </BannerPopupStyled>
    )
}

export default BannerPopup