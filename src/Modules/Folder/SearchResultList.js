import React from 'react';
import styled from 'styled-components';

import SearchedItem from './SearchedItem';


const SearchResultList = ({
                            selectedItemIndex,
                            selectItem,
                            bookmarkSearchResult,
                            bookmarkFolderSearchResult,
                          }) => {
  return (
    <ResultWrapper>
      <SearchedItemWrapper>
        {bookmarkSearchResult.map((folder, index) => (
          <SearchedItem
            key={folder.id}
            info={folder} type={'FOLDER'}
            selected={index === selectedItemIndex}
            selectItem={() => selectItem(index)}
          />
        ))}
      </SearchedItemWrapper>

      <Divider />

      <SearchedItemWrapper>
        {bookmarkFolderSearchResult.map((bookmark, index) => (
          <SearchedItem
            key={bookmark.id}
            info={bookmark}
            type={'BOOKMARK'}
            selected={index === selectedItemIndex - bookmarkSearchResult.length}
            selectItem={() => selectItem(index + bookmarkSearchResult.length)}
          />
        ))}
      </SearchedItemWrapper>
    </ResultWrapper>
  );
};

const ResultWrapper = styled.div`
  width: 458px;
  padding: 12px 0;
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
