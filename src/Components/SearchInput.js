import React, { useState } from 'react';
import styled from 'styled-components';

const Continaer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Form = styled.form``;
const TextInput = styled.input``;

export default function SearchInput() {
  const [bookMark, setBookMark] = useState('');
  const [keyWord, setKeyWord] = useState('');
  const [engine, setEngine] = useState('');

  const handleSearch = (e) => {
    setKeyWord(e.target.value);
    console.log(`${keyWord} 검색중`);
    setEngine(e.target.getAttribute('name'));
    console.log(`검색은 ${engine}에서`);
  };
  const bookMarkSearch = (e) => {
    setBookMark(e.target.value);
    console.log(`${bookMark} 검색중`);
    setEngine(e.target.getAttribute('name'));
    console.log(`검색은 ${engine}에서`);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (engine === 'google') {
      // eslint-disable-next-line no-restricted-globals
      location.href = 'https://www.google.co.kr/search?q=' + keyWord;
    } else {
      console.log('북마크 검색기능 만드느중');
    }
    setKeyWord('');
    setBookMark('');
  };

  return (
    <Continaer>
      <Form onSubmit={submitHandler}>
        <TextInput
          type="text"
          name="bookmark"
          value={bookMark}
          onChange={bookMarkSearch}
          placeholder="search saved bookmarks"
          autoComplete="off"
        ></TextInput>
      </Form>

      <Form onSubmit={submitHandler}>
        <TextInput
          type="text"
          name="google"
          value={keyWord}
          onChange={handleSearch}
          placeholder="or google"
          autoComplete="off"
        ></TextInput>
      </Form>
    </Continaer>
  );
}
