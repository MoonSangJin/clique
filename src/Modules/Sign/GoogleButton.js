import React from 'react';
import styled from 'styled-components';

import googleIconSrc from '../../assets/img/googleIcon.png';


const GoogleButton = ({ onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <GoogleLogo src={googleIconSrc} alt={'google logo'} />
      <GoogleButtonText>
        Google
      </GoogleButtonText>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 40px;
  margin-top: 6px;
  background: #ffffff;
  border-radius: 3px;
  border: thin solid #888;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

const GoogleLogo = styled.img`
  width: 32px;
  height: 32px;
`;

const GoogleButtonText = styled.div`
  width: calc(100% - 64px);

  font-weight: bold;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.02em;
  text-align: center;
`;


export default GoogleButton;