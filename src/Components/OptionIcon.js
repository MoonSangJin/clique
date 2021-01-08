import React from 'react';
import styled from 'styled-components';
import optionIcon from '../assets/img/option.svg';
export default function OptionIcon() {
  return (
    <>
      <Container src={optionIcon} />
    </>
  );
}

const Container = styled.img`
  &:hover {
    cursor: pointer;
  }
`;
