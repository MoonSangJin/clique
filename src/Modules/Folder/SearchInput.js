import React, { useState } from 'react';
import styled from 'styled-components';
import handGlassSrc from '../../assets/img/handGlass';
import SearchResultList from './SearchResultList';


const mapSearchEngineToSearchMethod = {
  clique: () => console.log('searching clique'),
  google: (e) => {
    e.preventDefault();
    window.location.href = 'https://www.google.co.kr/search?q=' + 'not implemented keyword';
  },
};


export default function SearchInput({ bookmarkFolderList, bookmarkList }) {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchEngine, _setSearchEngine] = useState('clique');
  const searchInputRef = React.createRef();

  const handleSearchInputChanged = (e) => {
    setSearchKeyword(e.target.value);
    mapSearchEngineToSearchMethod[searchEngine]();
  };

  const getSearchedBookmarkFolderList = () => searchKeyword ?
    bookmarkFolderList.filter((folder) => folder.name.includes(searchKeyword))
    : [];

  const getSearchedBookmarkList = () => searchKeyword ?
    bookmarkList.filter((bookmark) => bookmark.title.includes(searchKeyword))
    : [];

  return (
    <Container>
      <InputRow ref={searchInputRef}>
        <HandGlass
          src={handGlassSrc}
          alt={`hand glass`}
        />
        <Input
          type="text"
          name="bookmark"
          value={searchKeyword}
          onChange={(e) => handleSearchInputChanged(e)}
          placeholder="Search bookmark, folder, keyword or URL"
          autoComplete="off"
        />
        <VerticalLine
          googleEngine={true}
          bookMarkEngine={false}
        />
      </InputRow>
      <SearchResult>
        {
          searchEngine === 'clique' && searchKeyword ?
            <SearchResultList
              bookmarkSearchResult={getSearchedBookmarkFolderList().slice(0, 5)}
              bookmarkFolderSearchResult={getSearchedBookmarkList().slice(0, 200)}
            />
            : null
        }
      </SearchResult>
    </Container>
  );
}

const Container = styled.div``;

const HandGlass = styled.img`
  margin-left: 20px;
  margin-right: 8px;
  width: 20px;
  height: 20px;
`;

const InputRow = styled.div`
  display: flex;
  width: 470px;
  height: 54px;
  background: #f5f7f8;
  border-radius: 50px;
  align-items: center;
`;

const Input = styled.input`
  // all: unset;
  // ${({ googleEngine }) => googleEngine && `display:none;`}
  //margin-right: 44px;
  //
  //font-family: Poppins;
  //font-size: 14px;
  //line-height: 18px;
  //letter-spacing: -0.02em;
  //color: #B5BDC2;
`;

const VerticalLine = styled.div`
  border: 1px solid rgba(144, 160, 173, 0.3);
  height: 28px;
  margin-right: 12px;
  ${({ googleEngine }) => googleEngine && `display:none;`}
  ${({ bookMarkEngine }) => bookMarkEngine && `display:none;`}
`;

const SearchResult = styled.div`
  position: absolute;
  z-index: 100;
`;