import React from 'react';
import styled from 'styled-components';

const Container = styled.button`
  all: unset;
  width: 100%;
  height: 40px;
  background: #7785ff;
  border-radius: 3px;
  &:hover {
    cursor: pointer;
  }
  text-align: center;
`;

const Text = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 18px;
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
