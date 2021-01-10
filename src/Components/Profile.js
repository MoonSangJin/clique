import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  width: 32px;
  height: 32px;
  background-image: url(${props => props.profileImageSrc});
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

export default function Profile({ style, profileImageSrc }) {
  return <Container style={style} profileImageSrc={profileImageSrc} />;
}
