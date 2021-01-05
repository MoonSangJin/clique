import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: ${({ fontWeight }) => fontWeight};
  font-size: ${({ fontSize }) => fontSize}px;
  line-height: 39px;
  /* identical to box height */

  display: flex;
  align-items: center;
  letter-spacing: -0.02em;

  color: #070701;
`;
export default function LargeText({ text, fontSize = 24, fontWeight = '600' }) {
  return <Container style={{ fontSize, fontWeight }}>{text}</Container>;
}
