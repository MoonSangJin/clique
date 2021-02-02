import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  width: 100vw;
  height: 100vh;
  z-index: 9998;
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: 8px;
  background-color: white;
  z-index: 9999;
`;

export default function ChangeCoverModal({ isOpen, closeHandler, children }) {
  return isOpen ? (
    <>
      <Overlay isOpen={isOpen} onClick={closeHandler} />
      <ModalWrapper>{children}</ModalWrapper>
    </>
  ) : null;
}
