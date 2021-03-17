import React from 'react';
import styled from 'styled-components';

import guide1Src from '../../../assets/img/Guide/guide1.png';
import guide2Src from '../../../assets/img/Guide/guide2.png';


const Step1 = () => {
  return (
    <Wrapper>
      <Description>
        Pin the Clique Extension on the browser toolbar 📌
      </Description>
      <Guide src={guide1Src} />

      <Description>
        Click on the icon and create/choose a folder to save 🔗
      </Description>

      <Guide src={guide2Src} />
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

const Image = styled.img`
  display: block;
  margin: 0 auto;
`;

const Guide = styled(Image)`
  width: 242px;
`;


export default Step1;
