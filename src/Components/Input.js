import React from 'react';
import styled from 'styled-components';


const Label = styled.div`
`;

const ValidationMessage = styled.div`
  color: red;
`;

export default function Input({ label, value, onChange, onFocus, onBlur, placeholder, validationMessage }) {
  return (
    <>
      <Label>{label}</Label>
      <input value={value} onChange={onChange} placeholder={placeholder} onFocus={onFocus} onBlur={onBlur} />
      <ValidationMessage>
        {validationMessage}
      </ValidationMessage>
    </>
  );
}
