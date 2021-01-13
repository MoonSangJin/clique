import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Input from '../../Components/Input';
import PurpleButton from '../../Components/PurpleButton';
import GrayText from '../../Components/GrayText';
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
    <AuthContainer>
      <LargeText text={'Complete signing up'} />
      <Description>
        <GrayText
          text={'Create an account and unlock all the benefits of Clique'}
        />
      </Description>

      <InputRow>
        <Input
          value={email}
          placeholder={'Email'}
          validationMessage={emailValidationMessage}
          onChange={emailChangeHandler}
          onFocus={() => setEmailValidationMessage('')}
          onBlur={isValidEmail}
        />
        <PasswordInputWrapper>
          <Input
            value={password}
            placeholder={'password'}
            validationMessage={passwordValidationMessage}
            onChange={passwordChangeHandler}
            onFocus={() => setPasswordValidationMessage('')}
            onBlur={isValidPassword}
            type={'password'}
          />
        </PasswordInputWrapper>
      </InputRow>

      <ButtonWrapper>
        <PurpleButton onClick={handleSignUp} text={'Sign Up'} />
      </ButtonWrapper>

      <PolicyDescription>
        By joining Clique you agree to our
        <ExternalLink href={'#'}>&nbsp;Privacy Policy&nbsp;</ExternalLink>
        and
        <ExternalLink href={'#'}>&nbsp;Terms of Service</ExternalLink>
      </PolicyDescription>
    </AuthContainer>
  );
};

export default SignUpPagePresenter;

const Description = styled.div`
  margin-top: 4px;
`;

const InputRow = styled.div`
  width: 100%;
  margin-top: 48px;
`;

const PasswordInputWrapper = styled.div`
  margin-top: 7px;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  margin-top: 70px;
`;

const PolicyDescription = styled.div`
  display: flex;
  margin-top: 109px;
  
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: #90A0AD;
`;

const ExternalLink = styled.a`
  all: unset;
  display: inline;
  
  color: #7785FF;
  
  &:hover {
    cursor: pointer;
  }
`;
