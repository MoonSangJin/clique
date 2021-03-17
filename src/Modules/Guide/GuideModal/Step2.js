import React from 'react';
import styled from 'styled-components';

import guide3Src from '../../../assets/img/Guide/guide3.png';
import guide4Src from '../../../assets/img/Guide/guide4.png';


const Step2 = () => {
  return (
    <Wrapper>
      <Description>
        Open New Tab to search bookmarks/folders within seconds 🔍
      </Description>
      <Guide3 src={guide3Src} />

      <Description>
        Pin your favorites and customize folder display with thumbnails
      </Description>

      <Guide4 src={guide4Src} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 500px;
  height: 480px;
  padding-top: 21px;
`;

const Description = styled.div`
  font-size: 14px;
  line-height: 25px;
  letter-spacing: -0.02em;
  color: #000000;
`;

const Guide3 = styled.img`
  width: 362px;
  margin-left: 72px;
`;

const Guide4 = styled.img`
  width: 314px;
  margin-left: 86px;
`;


export default Step2;
