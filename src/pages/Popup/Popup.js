import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Scroll from './Scroll';
const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export default function Popup() {
  const [tabs, setTabs] = useState([]);
  const searchUrl = () =>
    chrome.tabs.query({ lastFocusedWindow: true }, (tabs) => setTabs(tabs));

  useEffect(() => {
    searchUrl();
  }, []);

  return (
    <Container>
      <Scroll {...{ tabs }}></Scroll>
    </Container>
  );
}
