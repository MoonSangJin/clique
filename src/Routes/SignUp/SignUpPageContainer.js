import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import SignUpPagePresenter from './SignUpPagePresenter';
import { signUpRequest } from '../../Store/SignUp/actions';
import ReactGa from 'react-ga';
import { getGoogleOAuthToken } from '../../Services/googleOAuth';
import { signWithGoogleRequest } from '../../Store/User/actions';


const SignUpPageContainer = () => {
  const signUpReducer = useSelector((state) => state.signUpReducer);
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailValidationMessage, setEmailValidationMessage] = useState('');
  const [passwordValidationMessage, setPasswordValidationMessage] = useState(
    ''
  );

  useEffect(() => {
    ReactGa.pageview('/sign-up');
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
        'please enter a password of at least 8 characters',
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

  const signWithGoogle = async () => {
    const token = await getGoogleOAuthToken();

    dispatch(signWithGoogleRequest({oAuth: token}));
  };

  const handleOnKeyUp = (e) => {
    const enterKeyCode = 13;

    if (e.keyCode === enterKeyCode) {
      handleSignUp();
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
          signWithGoogle,
          emailChangeHandler,
          passwordChangeHandler,
          isValidEmail,
          isValidPassword,
          handleOnKeyUp
        }}
      />
      {signUpReducer.signUpResult.result === 'success' ? (
        <Redirect to="/" />
      ) : null}
    </>
  );
};

export default SignUpPageContainer;
