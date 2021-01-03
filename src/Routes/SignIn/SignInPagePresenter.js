import React from 'react';
import styled from 'styled-components';
import Gnb from '../../Components/Gnb';
import SignInForm from '../../Components/SignInForm';
import { Link } from 'react-router-dom';

const Container = styled.div``;

const SignInPagePresenter = () => {
  return (
    <Container>
      <Gnb />
      <Link to="/">home</Link>
      <SignInForm />
    </Container>
  );
};

export default SignInPagePresenter;
