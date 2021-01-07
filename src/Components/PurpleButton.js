import React from 'react';
import styled from 'styled-components';

const Container = styled.button`
  all: unset;
  width: 544px;
  height: 56px;
  background: #7785ff;
  border-radius: 3px;
  &:hover {
    cursor: pointer;
  }
  text-align: center;
`;
const Text = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #ffffff;
`;
export default function PurpleButton({ text, onClick }) {
  return (
    <Container onClick={onClick}>
      <Text>{text}</Text>
    </Container>
  );
}
