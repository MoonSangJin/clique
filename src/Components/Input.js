import React from 'react';
import styled from 'styled-components';

const ValidationMessage = styled.div`
  color: red;
  margin: 15px;
`;
const InputContainer = styled.input`
  all: unset;
  width: 544px;
  height: 60px;
  background: #f5f7f8;
  border-radius: 50px;
  margin: 15px;
`;
export default function Input({
  value,
  onChange,
  onFocus,
  onBlur,
  placeholder,
  validationMessage,
}) {
  return (
    <>
      <InputContainer
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <ValidationMessage>{validationMessage}</ValidationMessage>
    </>
  );
}
