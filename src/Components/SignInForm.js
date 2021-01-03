import React, { useState } from 'react';
import styled from 'styled-components';
import Input from './Input';
import PurpleButton from './PurpleButton';

export default function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailValidationMessage, setEmailValidationMessage] = useState('');
  const [passwordValidationMessage, setPasswordValidationMessage] = useState(
    ''
  );

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
      setPasswordValidationMessage(
        'please enter a password of at least 8 characters'
      );

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
    <Container>
      <Welcome>Welcome to Clique</Welcome>
      <div>google</div>
      <Wrapper>
        <Input
          label={''}
          value={email}
          placeholder={'Email'}
          validationMessage={emailValidationMessage}
          onChange={emailChangeHandler}
          onFocus={() => setEmailValidationMessage('')}
          onBlur={isValidEmail}
        />
        <Input
          label={''}
          value={password}
          placeholder={'password'}
          validationMessage={passwordValidationMessage}
          onChange={passwordChangeHandler}
          onFocus={() => setPasswordValidationMessage('')}
          onBlur={isValidPassword}
        />
      </Wrapper>
      <div>signup</div>
      <ButtonWrapper>
        <PurpleButton onClick={checkValidation} text={'Sign In'} />
      </ButtonWrapper>
    </Container>
  );
}
const Container = styled.div`
  width: 630px;
  height: 700px;
  border-top: 5px solid #7785ff;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 15px;

  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.08);
`;
const Welcome = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 39px;
  text-align: center;
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
