import React from 'react';
import styled from 'styled-components';


export default function DetailWhiteButton({ onClick }) {
  return <Container onClick={onClick}>Open All</Container>;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 65px;
  height: 27px;
  border: 1px solid #7785ff;
  box-sizing: border-box;
  border-radius: 3px;

  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  line-height: 15px;
  letter-spacing: -0.02em;
  color: #7785ff;
  
  &:hover {
    cursor: pointer;
  }
`;
