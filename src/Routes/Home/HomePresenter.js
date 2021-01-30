import React from 'react';
import styled from 'styled-components';

import FolderRow from '../../Components/FolderRow';
import SearchInput from '../../Modules/Folder/SearchInput';
import searchInputBackgroundSrc from '../../assets/img/searchInputBackground';


const HomeScreenPresenter = ({
  bookmarkFolderList,
  bookmarkList,
  isLoggedIn,
}) => {
  return (
    <Container>
      <SearchInputWrapper>
        <SearchInput {...{ bookmarkFolderList, bookmarkList }} />
      </SearchInputWrapper>

      <FolderRowWrapper>
        <FolderRow {...{ bookmarkFolderList, isLoggedIn, type: 'card' }} />
      </FolderRowWrapper>
    </Container>
  );
};


const Container = styled.div``;

const SearchInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 76px 0;
  background-image: url(${searchInputBackgroundSrc});
  background-size: cover;
`;

const FolderRowWrapper = styled.div`
  width: 1185px;
  margin: 50px auto 0 auto;
`;


export default HomeScreenPresenter;
