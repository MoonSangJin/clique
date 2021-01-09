import React from 'react';
import styled from 'styled-components';
export default function DetailPurpleButton() {
  return <Container>Add</Container>;
}

const Container = styled.div`
  width: 86px;
  height: 36px;
  background: #7785ff;
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
  text-align: center;
  letter-spacing: -0.02em;

  color: #ffffff;

  &:hover {
    cursor: pointer;
  }
  margin: 5px;
`;
