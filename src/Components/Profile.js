import React from 'react';
import styled from 'styled-components';
import defaultImage from '../assets/img/defaultImage';
const Container = styled.div`
  width: 54px;
  height: 54px;
  background-image: url(${defaultImage});
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;
export default function Profile({ style }) {
  return <Container style={style} />;
}
