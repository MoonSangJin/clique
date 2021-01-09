import React from 'react';
import styled from 'styled-components';
import Background from '../assets/img/background.svg';

const Wrapper = styled.div`
  width: 100%;
  height: 260px;
  background-image: url(${Background});
  background-size: cover;
  border-radius: 10px;
  margin: 65px auto 0 auto;
`;

export default function background() {
  return <Wrapper />;
}
