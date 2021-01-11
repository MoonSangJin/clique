import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SubmitForm from './SubmitForm';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const PopupPresenter = ({ tabs }) => {
  return (
    <Container>
      <SubmitForm {...{ tabs }} />
    </Container>
  );
};

export default PopupPresenter;
