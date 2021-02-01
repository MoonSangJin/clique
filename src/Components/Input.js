import React from 'react';
import styled from 'styled-components';

const ValidationMessage = styled.div`
  color: #ff4545;
  margin-left: 20px;
  height: 15px;
`;

const InputContainer = styled.input`
  all: unset;
  width: 100%;
  height: 45px;
  background: #f5f7f8;
  border: 1.4px solid ${({ isValid }) => (isValid ? '#F5F7F8' : '#FF4545')};
  border-radius: 50px;
  text-indent: 23px;

  ::placeholder {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: -0.02em;
    color: rgba(144, 160, 173, 0.8);
  }

  :focus {
    border: 1.4px solid #7785ff;
  }
`;

export default function Input({
  value,
  onChange,
  onFocus,
  onBlur,
  onKeyUp,
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
        onKeyUp={onKeyUp}
        type={type}
        isValid={validationMessage === ''}
      />
      <ValidationMessage>{validationMessage}</ValidationMessage>
    </>
  );
}
