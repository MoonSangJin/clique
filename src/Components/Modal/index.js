import React from 'react';
import styled from 'styled-components';


export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  
  width: 100vw;
  height: 100vh;
  border: 1px solid black;
  
  background-color: rgba(0, 0, 0, 0.16);
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 500px;
  height: 400px;
  padding: 20px;
  border: solid 1px black;
  background-color: white;
  
`;

export default function Modal({ isOpen, closeHandler, children }) {
  return (
    isOpen ?
      <>
        <Overlay isOpen={isOpen} onClick={closeHandler} />
        <ModalWrapper>
          {children}
        </ModalWrapper>
      </>
      :
      null
  );
}
