import React from 'react';
import styled from 'styled-components';

import guide5Src from '../../../assets/img/Guide/guide5.png';
import guide6Src from '../../../assets/img/Guide/guide6.png';


const Step2 = () => {
  return (
    <Wrapper>
      <Description>
        Click each folder to open, rename and add bookmarks! 📂
      </Description>
      <Guide3 src={guide5Src} />
      <Guide4 src={guide6Src} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 500px;
  height: 480px;
  padding-top: 21px;
`;

const Description = styled.div`
  font-size: 16px;
  line-height: 25px;
  letter-spacing: -0.02em;
  color: #000000;
`;

const Guide3 = styled.img`
  width: 362px;
  margin-left: 94px;
`;

const Guide4 = styled.img`
  width: 314px;
  margin-left: 94px;
`;


export default Step2;
