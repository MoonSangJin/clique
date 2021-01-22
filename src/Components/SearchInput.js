import React, { useState } from 'react';
import styled from 'styled-components';
import handGlassSrc from '../assets/img/handGlass';


const mapSearchEngineToSearchMethod = {
  clique: () => console.log('searching clique'),
  google: (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-restricted-globals
    location.href = 'https://www.google.co.kr/search?q=' + 'not implemented keyword';
  },
};


export default function SearchInput() {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchEngine, setSearchEngine] = useState('clique');

  const handleSearchInputChanged = (e) => {
    setSearchKeyword(e.target.value);
    mapSearchEngineToSearchMethod[searchEngine]();
  };

  return (
    <>
      <Container>
        <InputRow>
          <HandGlass
            src={handGlassSrc}
            alt={`hand glass`}
          />
          <BookmarkInput
            type="text"
            name="bookmark"
            value={searchKeyword}
            onChange={(e) => handleSearchInputChanged(e)}
            placeholder="Search bookmark,folder,keyword or URL"
            autoComplete="off"
          />
          <VerticalLine
            googleEngine={true}
            bookMarkEngine={false}
          />
        </InputRow>
      </Container>
      <div>
        {
          searchEngine === 'clique' && searchKeyword ?
            <div>
              {searchKeyword}
            </div>
            :
            null
        }
      </div>
    </>
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

const BookmarkInput = styled.input`
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
