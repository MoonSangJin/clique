import React from 'react';
import styled from 'styled-components';

import Background from '../../Components/Background';
import FolderRow from '../../Components/FolderRow';
import SearchInput from '../../Components/SearchInput';


const HomeScreenPresenter = ({ bookmarkFolderList, bookmarkList, isLoggedIn }) => {
  return (
    <Container>
      <Background />

      <SearchRow>
        <SearchInput {...{ bookmarkFolderList, bookmarkList }} />
      </SearchRow>

      <FolderRowWrapper>
        <FolderRow {...{ bookmarkFolderList, isLoggedIn, type: 'card' }} />
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
  margin-top: 37px;
`;

const FolderRowWrapper = styled.div`
  margin-top: 42px;
`;

export default HomeScreenPresenter;
