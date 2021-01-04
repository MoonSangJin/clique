import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../Input';
import PurpleButton from '../PurpleButton';
import GrayText from '../GrayText';
import PurpleText from '../PurpleText';
import AuthContainer from '../AuthContainer';
import LargeText from '../LargeText';

export default function SignUpForm() {
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
    <AuthContainer>
      <LargeText text={'Complete signing up'} />
      <GrayText
        text={'Create an account and unlock all the benefits of Clique'}
      />
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
          type={'password'}
        />
      </Wrapper>
      <PurpleButton onClick={checkValidation} text={'Sign Up'} />
      <GrayText text={'OR'} />
      <div>google</div>
      <Row>
        <GrayText text={'By joining Clique you agree to our'} />
        <PurpleText
          text={'Privacy Policy'}
          style={{ marginLeft: '5px', marginRight: '5px' }}
        />
        <GrayText text={'and'} />
        <PurpleText text={'Terms of Service'} style={{ marginLeft: '5px' }} />
      </Row>
    </AuthContainer>
  );
}
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Row = styled.div`
  display: flex;
`;
