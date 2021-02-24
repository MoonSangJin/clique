import React from 'react';
import styled from 'styled-components';
import SubmitForm from './SubmitForm';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const PopupPresenter = ({ tabs, postServer, bookmarkFolderList }) => {
  return (
    <Container>
      <SubmitForm {...{ tabs, postServer, bookmarkFolderList }} />
    </Container>
  );
};

export default PopupPresenter;
