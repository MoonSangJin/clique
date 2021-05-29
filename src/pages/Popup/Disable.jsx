import React from 'react';
import styled from 'styled-components';

import logoSrc from '../../assets/img/logo';


const NotSignInPage = () => {
  return (
    <Wrapper>
      <Logo src={logoSrc} />
      <Message>
        Clique will be discontinued on 2021/06/1.
        For any inquiries, please feel free to reach us at maitracle@gmail.com. <br />
        Thank you.
      </Message>

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


export default NotSignInPage;
