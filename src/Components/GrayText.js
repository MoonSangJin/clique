import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.02em;

  color: rgba(144, 160, 173, 0.8);
`;

export default function GrayText({ text }) {
  return <Container>{text}</Container>;
}
