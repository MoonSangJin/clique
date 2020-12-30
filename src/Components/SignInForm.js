import React, { useState } from 'react';
import styled from 'styled-components';
import Input from './Input';


const Wrapper = styled.div`
  width: 500px;
  height: 800px;
  
  border: solid 1px black;
  margin: 0 auto;
`;

const Title = styled.div`

`;

export default function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailValidationMessage, setEmailValidationMessage] = useState('');
  const [passwordValidationMessage, setPasswordValidationMessage] = useState('');

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const isValidEmail = () => {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!emailRegex.test(email)) {
      setEmailValidationMessage('please enter a valid email.');

      return false;
    }

    return true;
  };

  const isValidPassword = () => {
    if (password.length <= 8) {
      setPasswordValidationMessage('please enter a password of at least 8 characters');

      return false;
    }

    return true;
  };

  const checkValidation = () => {
    let isValid = true;

    isValid = isValidEmail() && isValid;
    isValid = isValidPassword() && isValid;

    if (isValid) {
      // Todo(maitracle): 로그인 처리 로직 추가하기
    }
  };


  return (
    <Wrapper>
      <Title>
        Sign in
        <Input label={'email'} value={email} placeholder={''} validationMessage={emailValidationMessage}
               onChange={emailChangeHandler} onFocus={() => setEmailValidationMessage('')} onBlur={isValidEmail} />
        <Input label={'password'} value={password} placeholder={''} validationMessage={passwordValidationMessage}
               onChange={passwordChangeHandler} onFocus={() => setPasswordValidationMessage('')} onBlur={isValidPassword} />
      </Title>

      <button onClick={checkValidation}>
        sign in
      </button>
    </Wrapper>
  );
}
