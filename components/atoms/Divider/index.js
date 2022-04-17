import styled from "styled-components";

const DividerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2em;

  @media screen and (min-width: 750px) {
    font-size: 2.5em;
  }
  
  color: ${props => props.theme.colors.dividerText};
 // padding: 1em;
  margin: 1em 0;
  
  //width: 100%;
`

const DividerStyled = styled.span`
  
  &::before, &::after {
    display: inline-block;
    vertical-align: middle;
    clear: both;
    height: 0;
    overflow: hidden;
    content: "";
    border-top: 1px solid ${props => props.theme.colors.dividerLine};
  }
  
  &::before {
   margin: 0 0.66667em 0 calc(-100% - 0.66667em);
  //  transform: translateY(-1rem);
    width: 100%;
  }
  
  &::after {
    margin: 0 calc(-100% - 0.66667em) 0 0.66667em;
    width: 100%;
  }
`

const Divider = ({children}) => {
  return (
    <DividerWrapper>
      <DividerStyled>
        {children}
      </DividerStyled>
    </DividerWrapper>
  )
}

export default Divider