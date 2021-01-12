import React from 'react';
import styled from 'styled-components';
import SubmitForm from './SubmitForm';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const PopupPresenter = ({ tabs, postServer }) => {
  return (
    <Container>
      <SubmitForm {...{ tabs, postServer }} />
    </Container>
  );
};

export default PopupPresenter;
