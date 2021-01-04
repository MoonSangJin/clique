import React from 'react';
import styled from 'styled-components';
import Gnb from '../../Components/Gnb';
import Input from '../../Components/Input';
import PurpleButton from '../../Components/PurpleButton';
import GrayText from '../../Components/GrayText';
import PurpleText from '../../Components/PurpleText';
import AuthContainer from '../../Components/AuthContainer';
import LargeText from '../../Components/LargeText';
import { Link } from 'react-router-dom';

const SignInPagePresenter = ({
  email,
  password,
  emailValidationMessage,
  setEmailValidationMessage,
  passwordValidationMessage,
  setPasswordValidationMessage,
  checkValidation,
  emailChangeHandler,
  passwordChangeHandler,
  isValidEmail,
  isValidPassword,
}) => {
  return (
    <>
      <Gnb />
      <Link to="/">home</Link>
      <AuthContainer>
        <LargeText text={'Welcome to Clique'} />
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
        <Row>
          <GrayText text={'Need an account?'} />
          <Link to="/sign-up">
            <PurpleText text={'Sign Up'} style={{ marginLeft: '8px' }} />
          </Link>
        </Row>
        <PurpleButton onClick={checkValidation} text={'Sign In'} />
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
const InputRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Row = styled.div`
  display: flex;
`;
export default SignInPagePresenter;
