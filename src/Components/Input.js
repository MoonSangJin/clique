import React from 'react';
import styled from 'styled-components';

const ValidationMessage = styled.div`
  color: red;
  margin-left: 35px;
`;
const InputContainer = styled.input`
  all: unset;
  width: 544px;
  height: 60px;
  background: #f5f7f8;
  border-radius: 50px;
  margin: 15px;
  text-indent: 20px;
  ::placeholder {
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 23px;
    /* identical to box height */

    letter-spacing: -0.02em;

    color: rgba(144, 160, 173, 0.8);
  }
`;
export default function Input({
  value,
  onChange,
  onFocus,
  onBlur,
  placeholder,
  validationMessage,
  type = 'text',
}) {
  return (
    <>
      <InputContainer
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onFocus={onFocus}
        onBlur={onBlur}
        type={type}
      />
      <ValidationMessage>{validationMessage}</ValidationMessage>
    </>
  );
}
