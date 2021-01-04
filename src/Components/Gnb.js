import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './Logo';
import Profile from './Profile';
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function Gnb() {
  return (
    <Wrapper>
      <Link to="/" style={{ all: 'unset' }}>
        <Logo style={{ marginLeft: '10px' }} />
      </Link>
      <Profile style={{ marginRight: '30px' }} />
    </Wrapper>
  );
}
