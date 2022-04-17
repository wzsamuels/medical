import styled, {keyframes} from 'styled-components';
import React from 'react';

const Modal = ({title, children, onClose, ...props}) => {
  return (
    <ModalBackground onClick={onClose}>
      <ModalBody onClick={e => e.stopPropagation()} {...props}>
        {onClose && <ModalClose onClick={onClose}>&times;</ModalClose>}
        <ModalHeader>
          <ModalTitle>
            {title}
          </ModalTitle>
        </ModalHeader>
        {children}
      </ModalBody>
    </ModalBackground>
  )
}

const ModalBackground = styled.div`
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 2000;
  position: fixed;
  background-color: rgba(0,0,0,.7);
  padding-top: 2%;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-content: center;
  align-items: center;
`;


const animateBottom = keyframes`
  from {bottom: -300px; opacity:0}
  to {bottom: 0; opacity:1}
`;

export const ModalBody = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
  animation-name: ${props => {
  return props.animate ? animateBottom : ''
}};
  
  animation-duration: 0.4s;
  
  width: 95%;
  height: auto; //90vh;
  max-height: 95vh;//600px; //500px;
  max-width: 600px;
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  margin: 1em;
  background-color: ${props => props.theme.colors.cardBackground};
  display: flex;
  flex-direction: column;
  padding: 1em;
`;

const ModalHeader = styled.div`
  position: relative;
  min-height: 4em;
  height: 4em;
`;

const ModalTitle = styled.div`
  margin: 0;
  text-align: center;
  font-size: 2em;
`;

const ModalClose = styled.span`
  position: absolute;
  top: .25em;
  right: .5em;
  font-size: 2.5em;
  opacity: .8;
  cursor: pointer;
  z-index: 2;
  &:hover {
    opacity: 1;
  }
`;

export default Modal