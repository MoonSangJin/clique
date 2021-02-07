import React from 'react';
import styled from 'styled-components';

import logoSrc from '../../assets/img/logo';


const NotSignInPage = () => {
  return (
    <Wrapper>
      <Logo src={logoSrc} />
      <Message>
        Sign In at Clique to make bookmarks!
      </Message>

      <LinkToSignIn href={'/newtab.html#/sign-in/'} target={'_blank'} rel={'noreferrer'}>
        Go to sign in
      </LinkToSignIn>

    </Wrapper>
  );
};


const Wrapper = styled.div`
  background: #FFFFFF;
  width: 310px;
  padding: 20px 21px;
  border-radius: 8px;
`;

const Logo = styled.img`
  height: 27px;
`;

const Message = styled.div`
  margin-top: 2px;

  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: #51514D;
`;

const LinkToSignIn = styled.a`
  display: block;
  margin-top: 20px;
  width: 100px;
  height: 30px;
  background: #7785FF;
  border-radius: 5px;
  padding-top: 6px;
  margin-left: auto;
  
  font-weight: bold;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.02em;
  text-align: center;
  color: #FFFFFF;
  text-decoration: none;
`;

export default NotSignInPage;
