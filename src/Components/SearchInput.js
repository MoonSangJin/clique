import React, { useState } from 'react';
import styled from 'styled-components';
import handGlass from '../assets/img/handGlass';


export default function SearchInput() {
  const [bookMark, setBookMark] = useState('');
  const [keyWord, setKeyWord] = useState('');
  const [engine, setEngine] = useState('');
  const [bookMarkEngine, setBookMarkEngine] = useState(false);
  const [googleEngine, setGoogleEngine] = useState(false);

  const bookMarkSearch = (e) => {
    setBookMark(e.target.value);
    console.log(`${bookMark} 검색중`);
    setEngine(e.target.getAttribute('name'));
    console.log(`검색은 ${engine}에서`);
  };
  const googleSearch = (e) => {
    setKeyWord(e.target.value);
    console.log(`${keyWord} 검색중`);
    setEngine(e.target.getAttribute('name'));
    console.log(`검색은 ${engine}에서`);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (engine === 'google') {
      // eslint-disable-next-line no-restricted-globals
      location.href = 'https://www.google.co.kr/search?q=' + keyWord;
      setGoogleEngine(false);
    } else {
      console.log('북마크 검색기능 만드느중');
      setBookMarkEngine(false);
    }
    setKeyWord('');
    setBookMark('');
  };

  const initBookMarkSearch = () => {
    setBookMarkEngine(true);
  };
  const endBookMarkSearch = () => {
    setBookMarkEngine(false);
    setBookMark('');
  };
  const initGoogleSearch = () => {
    setGoogleEngine(true);
  };
  const endGoogleSearch = () => {
    setGoogleEngine(false);
    setKeyWord('');
  };

  return (
    <Container>
      <InputRow>
        <img
          src={handGlass}
          alt={`handglass`}
          style={{ marginLeft: '20px', marginRight: '8px', width: '20px', height: '20px'}}
        />
        <Form onSubmit={submitHandler}>
          <BookmarkInput
            type="text"
            name="bookmark"
            value={bookMark}
            onChange={bookMarkSearch}
            placeholder="Search bookmark,folder,keyword or URL"
            autoComplete="off"
            googleEngine={googleEngine}
            onFocus={initBookMarkSearch}
            onBlur={endBookMarkSearch}
          >
            Search bookmark, folder, keyword, or URL
          </BookmarkInput>
        </Form>
        <VerticalLine
          googleEngine={googleEngine}
          bookMarkEngine={bookMarkEngine}
        />
        <Form onSubmit={submitHandler}>
          <GoogleInput
            type="text"
            name="google"
            value={keyWord}
            onChange={googleSearch}
            placeholder="or google"
            autoComplete="off"
            bookMarkEngine={bookMarkEngine}
            onFocus={initGoogleSearch}
            onBlur={endGoogleSearch}
          >
            or google
          </GoogleInput>
        </Form>
      </InputRow>
    </Container>
  );
}
const Container = styled.div``;

const Form = styled.form`
  display: flex;
  align-items: center;
`;

const InputRow = styled.div`
  display: flex;
  width: 470px;
  height: 54px;
  background: #f5f7f8;
  border-radius: 50px;
  align-items: center;
`;

const BookmarkInput = styled.div`
  // all: unset;
  // ${({ googleEngine }) => googleEngine && `display:none;`}
  margin-right: 44px;
  
  font-family: Poppins;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: #B5BDC2;
`;

const GoogleInput = styled.div`
  all: unset;
  ${({ bookMarkEngine }) => bookMarkEngine && `display:none;`}
  
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 15px;
  color: #90A0AD;
`;

const VerticalLine = styled.div`
  border: 1px solid rgba(144, 160, 173, 0.3);
  height: 28px;
  margin-right: 12px;
  ${({ googleEngine }) => googleEngine && `display:none;`}
  ${({ bookMarkEngine }) => bookMarkEngine && `display:none;`}
`;
