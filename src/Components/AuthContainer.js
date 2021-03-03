import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;

const PupleBorder = styled.div`
  max-width: 476px;
  height: 2px;
  background: #7785ff;
  margin: 0 auto;
  border-radius: 10px;
`;

const Wrapper = styled.div`
  padding: 43px 34px;
  max-width: 476px;

  height: 550px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.08);
`;

export default function AuthContainer({ children }) {
  return (
    <Container>
      <PupleBorder />
      <Wrapper>{children}</Wrapper>
    </Container>
  );
}
