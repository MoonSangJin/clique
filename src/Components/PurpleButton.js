import React, { useState } from 'react';
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
  font-weight: bold;
  font-size: 8px;
  line-height: 12px;
  color: #ffffff;
`;
export default function PurpleButton({ text }) {
  return (
    <Container>
      <Text>{text}</Text>
    </Container>
  );
}
