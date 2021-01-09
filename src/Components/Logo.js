import React from 'react';
import styled from 'styled-components';

import logo from '../assets/img/logo';

const Image = styled.img`
  width: 127px;
  
  &:hover {
    cursor: pointer;
  }
`;

export default function Logo() {
  return <Image src={logo} />
};
