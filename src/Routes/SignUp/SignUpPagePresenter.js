import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Input from '../../Components/Input';
import PurpleButton from '../../Components/PurpleButton';
import GrayText from '../../Components/GrayText';
import PurpleText from '../../Components/PurpleText';
import AuthContainer from '../../Components/AuthContainer';
import LargeText from '../../Components/LargeText';


const SignUpPagePresenter = ({
  email,
  password,
  emailValidationMessage,
  setEmailValidationMessage,
  passwordValidationMessage,
  setPasswordValidationMessage,
  handleSignUp,
  emailChangeHandler,
  passwordChangeHandler,
  isValidEmail,
  isValidPassword,
}) => {
  return (
    <>
      <Link to="/">home</Link>
      <AuthContainer>
        <LargeText text={'Complete signing up'} />
        <GrayText
          text={'Create an account and unlock all the benefits of Clique'}
        />
        <InputRow>
          <Input
            value={email}
            placeholder={'Email'}
            validationMessage={emailValidationMessage}
            onChange={emailChangeHandler}
            onFocus={() => setEmailValidationMessage('')}
            onBlur={isValidEmail}
          />
          <Input
            value={password}
            placeholder={'password'}
            validationMessage={passwordValidationMessage}
            onChange={passwordChangeHandler}
            onFocus={() => setPasswordValidationMessage('')}
            onBlur={isValidPassword}
            type={'password'}
          />
        </InputRow>
        <PurpleButton onClick={handleSignUp} text={'Sign Up'} />
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
    </>
  );
};

export default SignUpPagePresenter;

const InputRow = styled.div`
  width: 90%;
  margin: 0 auto;
`;
const Row = styled.div`
  display: flex;
`;
