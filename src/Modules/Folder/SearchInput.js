import React, { createRef, useState } from 'react';
import styled from 'styled-components';
import handGlassSrc from '../../assets/img/handGlass';
import SearchResultList from './SearchResultList';

const mapSearchEngineToInputPlaceholder = {
  clique: 'Search bookmark, folder, keyword or URL',
  google: 'or google',
};

export default function SearchInput({ bookmarkFolderList, bookmarkList }) {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchEngine, setSearchEngine] = useState('clique');
  let inputRef = createRef();

  const handleSearchInputChange = (e) => {
    setSearchKeyword(e.target.value);
  };

  const handleBlur = () => {
    setSearchEngine('clique');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && searchEngine === 'google') {
      window.location.href = `https://www.google.co.kr/search?q=${searchKeyword}`;
    }
  };

  const changeSearchEngineToGoogle = () => {
    setSearchEngine('google');
    inputRef.current.focus();
  };

  const getSearchedBookmarkFolderList = () =>
    searchKeyword
      ? bookmarkFolderList.filter((folder) =>
          folder.name.includes(searchKeyword)
        )
      : [];

  const getSearchedBookmarkList = () =>
    searchKeyword
      ? bookmarkList.filter((bookmark) =>
          bookmark.title.includes(searchKeyword)
        )
      : [];

  return (
    <Container>
      <InputWrapper>
        <HandGlass src={handGlassSrc} alt={`hand glass`} />
        <Input
          type="text"
          name="bookmark"
          value={searchKeyword}
          onChange={(e) => handleSearchInputChange(e)}
          placeholder={mapSearchEngineToInputPlaceholder[searchEngine]}
          autoComplete="off"
          onBlur={handleBlur}
          onKeyPress={handleKeyPress}
          ref={inputRef}
        />
        {/*Todo(maitracle): or google 기능을 추가할 때 주석을 해제한다*/}
        {/*<OrGoogleButton onClick={changeSearchEngineToGoogle}>*/}
        {/*  or google*/}
        {/*</OrGoogleButton>*/}
      </InputWrapper>
      <SearchResult>
        {searchEngine === 'clique' && searchKeyword ? (
          <SearchResultList
            bookmarkSearchResult={getSearchedBookmarkFolderList()}
            bookmarkFolderSearchResult={getSearchedBookmarkList()}
          />
        ) : null}
      </SearchResult>
    </Container>
  );
}

const Container = styled.div`
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 458px;
  height: 49px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
`;

const HandGlass = styled.img`
  margin-left: 20px;
  margin-right: 8px;
  width: 20px;
  height: 20px;
`;

const Input = styled.input`
  all: unset;
  width: 389px;
  
  &::placeholder {
    font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.02em;
  color: rgba(255, 255, 255, 0.5);
  }
`;

const SearchResult = styled.div`
  position: absolute;
  z-index: 100;
`;

// Todo(maitracle): or google 기능을 추가할 때 주석을 해제한다
// const OrGoogleButton = styled.div`
//   display: flex;
//   align-items: center;
//   height: 28px;
//   padding-left: 12px;
//   border-left: 1px solid rgba(144, 160, 173, 0.3);
//   font-size: 12px;
//   line-height: 15px;
//   color: #90a0ad;
// `;
