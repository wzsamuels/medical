import styled from "styled-components";

const FixedPopup = styled.div`
  background-color: ${props => props.theme.colors.cardBackground};
  color: ${props => props.theme.colors.cardText};
  border-radius: 4px;
  position: fixed;
  bottom: 5px;
  left: 5px;
`

export default FixedPopup