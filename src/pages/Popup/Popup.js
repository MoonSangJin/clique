import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Scroll from './Scroll';
import axios from 'axios';
import qs from 'qs';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const example = {
  folder_title: '테스트폴더1',
  bookmarks: [
    {
      title: '테스트링크타이틀1',
      url: '테스트링크1',
      favIconUrl: '테스트파비콘1',
      scroll_pos: 0,
    },
    {
      title: '테스트링크타이틀2',
      url: '테스트링크2',
      favIconUrl: '테스트파비콘2',
      scroll_pos: 50,
    },
    {
      title: '테스트링크타이틀3',
      url: '테스트링크3',
      favIconUrl: '테스트파비콘3',
      scroll_pos: 100,
    },
  ],
};

export default function Popup() {
  const [tabs, setTabs] = useState([]);
  const searchUrl = () =>
    chrome.tabs.query({ lastFocusedWindow: true }, (tabs) => setTabs(tabs));

  useEffect(() => {
    searchUrl();
  }, []);

  // const submitInfo = async () => {
  //   try {
  //     const result = await axios.get(
  //       'http://ec2-52-78-239-231.ap-northeast-2.compute.amazonaws.com/user',
  //       { headers: { 'content-type': 'application/json' } }
  //     );
  //     alert('읽기 성공');
  //     console.log(result);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // submitInfo();
  return (
    <Container>
      <Scroll {...{ tabs }} />
    </Container>
  );
}
