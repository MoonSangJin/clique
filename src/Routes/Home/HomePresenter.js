import React from 'react';
import styled from 'styled-components';

import FolderRow from '../../Components/FolderRow';
import SearchInput from '../../Modules/Folder/SearchInput';


const HomeScreenPresenter = ({
  searchInputBackgroundUrl,
  bookmarkFolderList,
  bookmarkList,
  isLoggedIn,
  listType,
  setListToCardType,
  setListToListType
}) => {
  return (
    <Container>
      <SearchInputWrapper searchInputBackgroundUrl={searchInputBackgroundUrl}>
        <SearchInput {...{ bookmarkFolderList, bookmarkList }} />
      </SearchInputWrapper>

      <FolderRowWrapper>
        <FolderRow {...{ bookmarkFolderList, isLoggedIn, type: listType, setListToCardType, setListToListType }} />
      </FolderRowWrapper>
    </Container>
  );
};


const Container = styled.div``;

const SearchInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 70px 0;
  background-image: url(${props => props.searchInputBackgroundUrl});
  background-size: cover;
`;

const FolderRowWrapper = styled.div`
  width: 1185px;
  margin: 50px auto 0 auto;
`;


export default HomeScreenPresenter;
