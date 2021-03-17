import React, { useState } from 'react';
import styled from 'styled-components';

import Modal from '../../../Components/Modal';
import Title from './Title';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Footer from './Footer';


const mapStepToComponent = {
  step1: <Step1 />,
  step2: <Step2 />,
  step3: <Step3 />,
};

const GuideModal = () => {
  const [step, setStep] = useState('step1');
  return (
    <Modal
      isOpen={true}
    >
      <ContentsWrapper>
        <Title />

        {
          mapStepToComponent[step]
        }

        <Footer step={step} />
      </ContentsWrapper>
    </Modal>
  );
};

const ContentsWrapper = styled.div`
  width: 500px;
`;


export default GuideModal;
