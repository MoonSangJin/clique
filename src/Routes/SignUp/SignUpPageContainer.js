import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import SignUpPagePresenter from './SignUpPagePresenter';
import { signUpRequest } from '../../Store/SignUp/actions';


const SignUpPageContainer = () => {
  const signUpReducer = useSelector((state) => state.signUpReducer);
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailValidationMessage, setEmailValidationMessage] = useState('');
  const [passwordValidationMessage, setPasswordValidationMessage] = useState(
    '',
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

    return isValid;
  };

  const handleSignUp = () => {
    const isValid = checkValidation();

    if (isValid) {
      dispatch(signUpRequest({ email, password, profileImageUrl: '' }));
    }
  };

  return (
    <>
      <SignUpPagePresenter
        {...{
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
        }}
      />
      {
        signUpReducer.signUpResult.result === 'success' ?
          <Redirect to='/' />
          : null
      }
    </>
  );
};

export default SignUpPageContainer;
