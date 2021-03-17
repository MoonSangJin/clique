import React from 'react';
import styled from 'styled-components';

import backArrow from '../../../assets/img/Guide/backArrow';


const Footer = (step, handleMoveNextStep) => {
  return (
    <Wrapper>
      <LeftWrapper>
        <BackButton onClick={handleMoveNextStep}>
          <BackButtonContentsWrapper>
            <BackArrow src={backArrow} />
            <BackLabel>
              Back
            </BackLabel>
          </BackButtonContentsWrapper>
        </BackButton>
        <NextButton onClick={handleMoveNextStep}>
          <NextLabel>
            Next
          </NextLabel>
        </NextButton>
      </LeftWrapper>

      <Close>
        close
      </Close>
    </Wrapper>
  );
};


const Wrapper = styled.div`
  display: flex;
  padding: 0 16px 0 30px;
  justify-content: space-between;
  align-items: center;
  
  font-weight: bold;
  font-size: 30px;
  line-height: 45px;
  letter-spacing: -0.02em;
  color: #000000;
`;

const Button = styled.button`
  border: none;
  width: 220px;
  height: 50px;
  cursor: pointer;

  background: #F3F3F3;
  border-radius: 5px;
`;

const ButtonLabel = styled.span`
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.02em;
  color: #51514D;
`;

const LeftWrapper = styled.div`
  display: flex;
`;

const BackButton = styled(Button)`
  width: 100px;
  background: #F3F3F3;
  margin-right: 13px;
`;

const BackButtonContentsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BackArrow = styled.img`
  width: 24px;
  height: 24px;
`;

const BackLabel = styled(ButtonLabel)`
  margin-right: 24px;
  
  color: #51514D;
`;

const NextButton = styled(Button)`
  background: #7785FF;
`;

const NextLabel = styled(ButtonLabel)`
  color: #FFFFFF;
`;

const Close = styled.div`
  border-bottom: 2px solid #B5BDC2;
  cursor: pointer;
  
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.02em;
  color: #B5BDC2;
`;


export default Footer;
