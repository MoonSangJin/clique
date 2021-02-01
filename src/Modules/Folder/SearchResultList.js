import React from 'react';
import styled from 'styled-components';

import SearchedItem from './SearchedItem';


const SearchResultList = ({
  bookmarkSearchResult,
  bookmarkFolderSearchResult,
}) => {
  return (
    <ResultWrapper>
      <SearchedItemWrapper>
        {bookmarkSearchResult.map((folder) => (
          <SearchedItem key={folder.id} info={folder} type={'FOLDER'} />
        ))}
      </SearchedItemWrapper>

      <Divider />

      <SearchedItemWrapper>
        {bookmarkFolderSearchResult.map((bookmark) => (
          <SearchedItem key={bookmark.id} info={bookmark} type={'BOOKMARK'} />
        ))}
      </SearchedItemWrapper>
    </ResultWrapper>
  );
};

const ResultWrapper = styled.div`
  width: 458px;
  padding: 12px 0;
  box-sizing: border-box;
  background: #ffffff;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  max-height: 578px;
`;

const SearchedItemWrapper = styled.div`
  max-height: 200px;
  overflow-y: scroll;
`;

const Divider = styled.div`
  width: 418px;
  margin: 10px auto;
  border-bottom: 1px solid rgba(222, 227, 230, 0.8);
`;

export default SearchResultList;
