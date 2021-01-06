import React, { useState } from 'react';
import SignUpPagePresenter from './SignUpPagePresenter';
import { useDispatch } from 'react-redux';
import { signUpRequest } from '../../Store/SignUp/actions';


const SignUpPageContainer = () => {
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

    if (isValid) {
      // Todo(maitracle): 로그인 처리 로직 추가하기
      dispatch(signUpRequest({ email, password }));
    }
  };
  return (
    <SignUpPagePresenter
      {...{
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
      }}
    />
  );
};

export default SignUpPageContainer;
