import React from 'react';
import styled from 'styled-components';

export default function DetailWhiteButton() {
  return <Container>Open All</Container>;
}

const Container = styled.div`
  width: 86px;
  height: 36px;
  border: 1.5px solid #7785ff;
  box-sizing: border-box;
  border-radius: 3px;

  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height */

  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: -0.02em;

  color: #7785ff;
  &:hover {
    cursor: pointer;
  }

  margin: 5px;
`;
