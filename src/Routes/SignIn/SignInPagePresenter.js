import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Input from '../../Components/Input';
import PurpleButton from '../../Components/PurpleButton';
import GrayText from '../../Components/GrayText';
import PurpleText from '../../Components/PurpleText';
import AuthContainer from '../../Components/AuthContainer';
import LargeText from '../../Components/LargeText';
import { mapPageToUrl } from '../../Constants/operationPageUrls';


const SignInPagePresenter = ({
  email,
  password,
  emailValidationMessage,
  setEmailValidationMessage,
  passwordValidationMessage,
  setPasswordValidationMessage,
  signInValidationMessage,
  eraseSignInValidationMessage,
  handleSignIn,
  signWithGoogle,
  handleOnKeyUp,
  emailChangeHandler,
  passwordChangeHandler,
  isValidEmail,
  isValidPassword,
}) => {
  const eraseEmailValidationMessage = () => {
    setEmailValidationMessage('');
    eraseSignInValidationMessage();
  };

  const erasePasswordValidationMessage = () => {
    setPasswordValidationMessage('');
    eraseSignInValidationMessage();
  };

  return (
    <AuthContainer>
      <LargeText text={'Welcome to Clique'} />
      <InputRow>
        <Input
          value={email}
          placeholder={'Email'}
          validationMessage={emailValidationMessage}
          onChange={emailChangeHandler}
          onFocus={eraseEmailValidationMessage}
          onBlur={isValidEmail}
          onKeyUp={handleOnKeyUp}
        />
        <PasswordInputWrapper>
          <Input
            value={password}
            placeholder={'Password'}
            validationMessage={passwordValidationMessage}
            onChange={passwordChangeHandler}
            onFocus={erasePasswordValidationMessage}
            onBlur={isValidPassword}
            onKeyUp={handleOnKeyUp}
            type={'password'}
          />
        </PasswordInputWrapper>
      </InputRow>

      <SignUpLinkWrapper>
        <GrayText text={'Need an account?'} />
        <StyledLink to="/sign-up">
          <PurpleText text={'Sign Up'} />
        </StyledLink>
      </SignUpLinkWrapper>

      <ButtonWrapper>
        <PurpleButton onClick={handleSignIn} text={'Sign In'} />
        <button onClick={signWithGoogle}>
          Google
        </button>
        <SignInValidationWrapper>
          {signInValidationMessage}
        </SignInValidationWrapper>
      </ButtonWrapper>

      <PolicyDescription>
        By joining Clique you agree to our
        <ExternalLink href={mapPageToUrl.privacy} target="_blank">&nbsp;Privacy Policy&nbsp;</ExternalLink>
        and
        <ExternalLink href={mapPageToUrl.terms} target="_blank">&nbsp;Terms of Service</ExternalLink>
      </PolicyDescription>
    </AuthContainer>
  );
};

const InputRow = styled.div`
  width: 100%;
  margin-top: 70px;
`;

const PasswordInputWrapper = styled.div`
  margin-top: 7px;
`;

const SignUpLinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 3px;
`;

const StyledLink = styled(Link)`
  all: unset;
  margin-left: 8px;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  margin-top: 49px;
`;

const SignInValidationWrapper = styled.div`
  margin-top: 22px;
  height: 21px;
  
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.02em;
  color: #FF4545;
  text-align: center;
`;

const PolicyDescription = styled.div`
  display: flex;
  margin-top: 66px;

  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: #90a0ad;
`;

const ExternalLink = styled.a`
  all: unset;
  display: inline;

  color: #7785ff;

  &:hover {
    cursor: pointer;
  }
`;

export default SignInPagePresenter;
