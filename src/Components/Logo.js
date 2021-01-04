import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 153px;
  height: 72px;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 72px;
  /* identical to box height */

  letter-spacing: -0.03em;

  color: #010100;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;
export default function Logo({ style }) {
  return <Container style={style}>Clique</Container>;
}
