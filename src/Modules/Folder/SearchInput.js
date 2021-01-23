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
    setSearchKeyword('');
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

  const getSearchedBookmarkFolderList = () => searchKeyword ?
    bookmarkFolderList.filter((folder) => folder.name.includes(searchKeyword))
    : [];

  const getSearchedBookmarkList = () => searchKeyword ?
    bookmarkList.filter((bookmark) => bookmark.title.includes(searchKeyword))
    : [];

  return (
    <Container>
      <InputRow>
        <HandGlass
          src={handGlassSrc}
          alt={`hand glass`}
        />
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
        <OrGoogleButton onClick={changeSearchEngineToGoogle}>
          or google
        </OrGoogleButton>
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
  width: 279px;
`;

const SearchResult = styled.div`
  position: absolute;
  z-index: 100;
`;

const OrGoogleButton = styled.div`
  display: flex;
  align-items: center;
  height: 28px;
  padding-left: 12px;
  border-left: 1px solid rgba(144, 160, 173, 0.3);
  font-size: 12px;
  line-height: 15px;
  color: #90A0AD;
`;