import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;
const PupleBorder = styled.div`
  width: 660px;
  height: 4px;
  background: #7785ff;
  margin: 0 auto;
  border-radius: 100px;
`;
const Wrapper = styled.div`
  width: 634px;
  height: 734px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 15px;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.08);
`;
export default function AuthContainer({ children }) {
  return (
    <Container>
      <PupleBorder />
      <Wrapper>{children}</Wrapper>
    </Container>
  );
}
