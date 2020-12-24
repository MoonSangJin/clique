import React from 'react';
import styled from 'styled-components';
import Background from '../assets/img/background.svg';

const Wrapper = styled.div`
  margin: 10px;
`;
const Image = styled.img`
  width: 100%;
  height: 200px;
`;
export default function background() {
  return (
    <Wrapper>
      <Image src={Background} />
    </Wrapper>
  );
}
