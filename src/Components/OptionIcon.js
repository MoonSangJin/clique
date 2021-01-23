import React from 'react';
import styled from 'styled-components';

import optionIcon from '../assets/img/option';

export default function OptionIcon() {
  return (
    <>
      <Container src={optionIcon} />
    </>
  );
}

const Container = styled.img`
  width: 24px;
  height: 24px;

  &:hover {
    cursor: pointer;
  }
`;
