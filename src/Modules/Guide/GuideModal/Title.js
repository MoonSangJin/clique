import React from 'react';
import styled from 'styled-components';


const Title = () => {
  return (
    <Wrapper>
      Get Started with&nbsp;
      <Logo>
        Clique
      </Logo>
    </Wrapper>
  );
};


const Wrapper = styled.div`
  font-weight: bold;
  font-size: 28px;
  line-height: 45px;
  letter-spacing: -0.02em;
  color: #000000;
  text-align: center;
`;

const Logo = styled.span`
  color: #7785FF;
`;


export default Title;
