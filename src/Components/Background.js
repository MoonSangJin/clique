import React from 'react';
import styled from 'styled-components';
import Background from '../assets/img/background.svg';

const Wrapper = styled.div`
  width: 95%;
  height: 100px;
  background-image: url(${Background});
  background-size: cover;
  margin: 0 auto;
`;
export default function background() {
  return <Wrapper />;
}
