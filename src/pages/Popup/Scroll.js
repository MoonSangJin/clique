import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-y: scroll;
`;

const ListRow = styled.div``;
const Image = styled.img`
  width: 20px;
  height: 20px;
`;
const Wrapper = styled.div``;

export default function Scroll({ tabs }) {
  return (
    <Container>
      {tabs.map(({ favIconUrl, title, url }, index) => (
        <ListRow key={index}>
          <Image src={favIconUrl} />
          {title}
        </ListRow>
      ))}
    </Container>
  );
}
