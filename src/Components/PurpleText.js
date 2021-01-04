import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */
  letter-spacing: -0.02em;
  color: #7785ff;

  &:hover {
    cursor: pointer;
  }
`;
export default function PurpleText({ text, style = {} }) {
  return <Container style={{ ...style }}>{text}</Container>;
}
