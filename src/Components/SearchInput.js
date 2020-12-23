import React from 'react';
import styled from 'styled-components';

const Continaer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Form = styled.form``;
const TextInput = styled.input``;

export default function SearchInput() {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log('submit');
  };

  return (
    <Continaer>
      <Form onSubmit={submitHandler}>
        <TextInput type="text" placeholder="search saved bookmarks"></TextInput>
      </Form>

      <Form onSubmit={submitHandler}>
        <TextInput type="text" placeholder="or google"></TextInput>
      </Form>
    </Continaer>
  );
}
