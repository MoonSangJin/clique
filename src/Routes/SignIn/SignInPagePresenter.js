import React from 'react';
import styled from 'styled-components';
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
  handleSignIn,
  emailChangeHandler,
  passwordChangeHandler,
  isValidEmail,
  isValidPassword,
}) => {
  return (
    <>
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

        <SignUpLinkWrapper>
          <GrayText text={'Need an account?'} />
          <StyledLink to="/sign-up">
            <PurpleText text={'Sign Up'} />
          </StyledLink>
        </SignUpLinkWrapper>

        <ButtonWrapper>
          <PurpleButton onClick={handleSignIn} text={'Sign In'} />
        </ButtonWrapper>

        <PolicyDescription>
          By joining Clique you agree to our
          <ExternalLink href={'#'}>&nbsp;Privacy Policy&nbsp;</ExternalLink>
          and
          <ExternalLink href={'#'}>&nbsp;Terms of Service</ExternalLink>
        </PolicyDescription>
      </AuthContainer>
    </>
  );
};

const InputRow = styled.div`
  width: 100%;
  margin-top: 46px;
`;

const SignUpLinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2px;
`;

const StyledLink = styled(Link)`
  all: unset;
  margin-left: 8px;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  margin-top: 49px;
`;

const PolicyDescription = styled.div`
  display: flex;
  margin-top: 144px;
  
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

export default SignInPagePresenter;
