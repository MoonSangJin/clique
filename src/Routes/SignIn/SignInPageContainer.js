import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import SignInPagePresenter from './SignInPagePresenter';
import { setSignInErrorMessage, signInRequest } from '../../Store/User/actions';
import ReactGa from 'react-ga';


const SignInPageContainer = () => {
  const userReducer = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailValidationMessage, setEmailValidationMessage] = useState('');
  const [passwordValidationMessage, setPasswordValidationMessage] = useState(
    ''
  );

  useEffect(() => {
    ReactGa.pageview('/sign-in');
  }, []);

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const isValidEmail = () => {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!emailRegex.test(email)) {
      setEmailValidationMessage('please enter a valid email.');

      return false;
    }

    return true;
  };

  const isValidPassword = () => {
    if (password.length < 8) {
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

  const handleSignIn = () => {
    const isValid = checkValidation();

    if (isValid) {
      dispatch(signInRequest({ email, password }));
    }
  };

  const handleOnKeyUp = (e) => {
    const enterKeyCode = 13;

    if (e.keyCode === enterKeyCode) {
      handleSignIn();
    }
  };

  const eraseSignInValidationMessage = () => {
    dispatch(setSignInErrorMessage(''))
  };

  return (
    <>
      <SignInPagePresenter
        {...{
          email,
          password,
          emailValidationMessage,
          setEmailValidationMessage,
          passwordValidationMessage,
          setPasswordValidationMessage,
          signInValidationMessage: userReducer.signInErrorMessage,
          handleOnKeyUp,
          eraseSignInValidationMessage,
          handleSignIn,
          emailChangeHandler,
          passwordChangeHandler,
          isValidEmail,
          isValidPassword,
        }}
      />
      {userReducer.user.isLoggedIn ? <Redirect to="/" /> : null}
    </>
  );
};

export default SignInPageContainer;
