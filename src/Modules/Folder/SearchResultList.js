import React from 'react';
import styled from 'styled-components';

import SearchedItem from './SearchedItem';


const SearchResultList = ({ bookmarkSearchResult, bookmarkFolderSearchResult }) => {
  return (
    <ResultWrapper>
      {
        bookmarkSearchResult.map((folder) =>
          <SearchedItem key={folder.id} info={folder} type={'FOLDER'} />)
      }
      <Divider />
      {
        bookmarkFolderSearchResult.map((bookmark) =>
          <SearchedItem key={bookmark.id} info={bookmark} type={'BOOKMARK'} />)
      }
    </ResultWrapper>
  );
};


const ResultWrapper = styled.div`
  width: 578px;
  padding: 28px 0;
  box-sizing: border-box;
  background: #FFFFFF;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  max-height: 578px;
  overflow-y: scroll;
`;

const Divider = styled.div`
  width: 520px;
  height: 0;
  margin: 0 auto;
  padding: 15px 0;
  border-bottom: 1px solid rgba(222, 227, 230, 0.8);
`;

export default SearchResultList;
