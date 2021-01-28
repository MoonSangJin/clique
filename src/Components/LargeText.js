import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-style: normal;
  font-weight: ${({ fontWeight }) => fontWeight};
  font-size: 20px;
  line-height: 30px;

  display: flex;
  align-items: center;
  letter-spacing: -0.02em;

  color: #070701;
`;

export default function LargeText({ text, fontSize = 20, fontWeight = '600' }) {
  return <Container style={{ fontSize, fontWeight }}>{text}</Container>;
}
