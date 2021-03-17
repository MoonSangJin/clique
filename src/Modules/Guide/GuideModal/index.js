import React, { useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';
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

const stepList = ['step1', 'step2', 'step3'];

const GuideModal = () => {
  const history = useHistory();
  const [step, setStep] = useState('step1');

  const closeModal = () => {
    history.push('/');
  };

  const currentStepIndex = useMemo(() => stepList.findIndex(item => item === step), [step]);

  const moveToNextStep = () => {
    if (currentStepIndex === stepList.length - 1) {
      closeModal();
    }

    setStep(stepList[currentStepIndex + 1]);
  };

  const moveToBeforeStep = () => {
    if (currentStepIndex === 0) {
      return;
    }

    setStep(stepList[currentStepIndex - 1]);
  };

  return (
    <Modal
      isOpen={true}
    >
      <ContentsWrapper>
        <Title />

        {
          mapStepToComponent[step]
        }
        <Footer step={step} moveToNextStep={moveToNextStep} moveToBeforeStep={moveToBeforeStep} closeModal={closeModal} />
      </ContentsWrapper>
    </Modal>
  );
};

const ContentsWrapper = styled.div`
  width: 500px;
`;


export default GuideModal;
