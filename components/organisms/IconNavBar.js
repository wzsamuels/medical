import styled from 'styled-components';
import IconTab from '../atoms/IconTab';

const ToolBarStyled = styled.div`
  color: ${props=> props.theme.colors.navBarText};
  background-color: ${props=> props.theme.colors.navBar};
  
  position: fixed;
  display: flex;
  box-shadow: 0 10px 20px -12px rgb(0 0 0 / 42%), 0 3px 20px 0px rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(0 0 0 / 20%);
`

const TopBar = styled(ToolBarStyled)`
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  
  * + * {
    margin-left: 1em;
  }
`

const BottomBar = styled(ToolBarStyled)`
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
`

const LeftBar = styled(ToolBarStyled)`
  top: 0;
  left: 0;
  height: 100%;
  width: 60px;
  transition: all .5s linear;
  flex-direction: column;
  align-items: center;
  
  &.open {
    width: 120px;
    ${IconTab} {
      width: 100px;
      height: 88px;
      padding: .875rem 1rem;
      margin: .25em auto;
    }
    
    .label {
      display: block;
    }
  }

  &.closed {
    width: 60px;
    ${IconTab} {
      width: 50px;
      height: 40px;
      padding: 2px;
      margin: .25em 0;
    }
  }
  
  .shown {
    width: 120px;
    overflow: visible;
  }
  
  .hidden {
    width: 0;
    overflow: hidden;
  }
  
  .menu-icon {
    display: block;
    cursor: pointer;
    float: left;
  }
  
  .icon-tab {
    
  }
  
  
  .label {
    display: none;
    text-align: center;
  }

  @media screen and (min-width: 600px) {

    // On a large screen, make open and closed side drawers the same
    &.closed {
      width: 120px;
      ${IconTab} {
        width: 100px;
        height: 88px;
        padding: .875rem 1rem;
        margin: .25em auto;
      }
      .label {
        display: block;
      }
    }
    
    // Hide menu icon 
    .menu-icon {
      display: none;
    }
    
    &.open.label {
      display: block;
    }
    
    // Large Icon tabs
    ${IconTab} {
      width: 100px;
      height: 80px;
      padding: .875rem 1rem;
      margin: .25em auto;
    }
  }

  
`

const IconNavBar = ({side, children, className}) => {

  let ToolBarType
  if(side === 'top') {
    ToolBarType = TopBar
  } else if (side === 'bottom') {
    ToolBarType = BottomBar
  } else if (side === 'left') {
    ToolBarType = LeftBar
  }

  return (
    <ToolBarType className={className}>
      {children}
    </ToolBarType>
  )
}

export default IconNavBar