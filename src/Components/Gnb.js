import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100px;
`;

const Logo = styled.div`
  width: 15%;
  height: 72px;
  background: skyblue;
`;
const Profile = styled.div`
  width: 15%;
  height: 72px;
  background: skyblue;
`;

export default function Gnb() {
  return (
    <Wrapper>
      <Logo>this is logo</Logo>
      <Profile>this is profile</Profile>
    </Wrapper>
  );
}
