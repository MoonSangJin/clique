import React from 'react';
import styled from 'styled-components';
export default function DetailPurpleButton() {
  return <Container>Add</Container>;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 74px;
  height: 30px;
  background: #7785ff;
  border-radius: 3px;

  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  letter-spacing: -0.02em;

  color: #ffffff;

  &:hover {
    cursor: pointer;
  }
`;
