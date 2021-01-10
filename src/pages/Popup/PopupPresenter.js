import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Scroll from './Scroll';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const PopupPresenter = ({ tabs }) => {
  return (
    <Container>
      <Scroll {...{ tabs }} />
    </Container>
  );
};

export default PopupPresenter;
