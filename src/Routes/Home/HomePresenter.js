import React from 'react';
import styled from 'styled-components';

import Background from '../../Components/Background';
import FolderRow from '../../Components/FolderRow';
import SearchInput from '../../Components/SearchInput';

const HomeScreenPresenter = ({ bookmarkFolderList }) => {
  return (
    <Container>
      <Background />

      <SearchRow>
        <SearchInput />
      </SearchRow>

      <FolderRowWrapper>
        <FolderRow {...{ bookmarkFolderList, type: 'card' }} />
      </FolderRowWrapper>
    </Container>
  );
};
const Container = styled.div`
  max-width: 1185px;
  margin: 0 auto;
`;

const SearchRow = styled.div`
  display: flex;
  justify-content: center;
`;

const FolderRowWrapper = styled.div`
  margin-top: 47px;
`;

export default HomeScreenPresenter;
