import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: #7785ff;

  &:hover {
    cursor: pointer;
  }
`;
export default function PurpleText({ text, style = {} }) {
  return <Container style={{ ...style }}>{text}</Container>;
}
