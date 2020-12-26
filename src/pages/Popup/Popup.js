/*
  const sendClicks = () => {
    console.log('popup.js > sendClicks()');
    chrome.tabs.query(
      { active: true, lastFocusedWindow: true },
      function (tabs) {
        chrome.tabs.sendMessage(
          tabs[0].id,
          { greeting: 'hello' },
          function (response) {
            alert(response.farewell);
          }
        );
      }
    );
  }; 탭 정보 message passing으로 보내는 예제코드 console창 볼 수가 없음
  */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div``;

export default function Popup() {
  const [tabUrl, setTabUrl] = useState('');

  const searchUrl = () => {
    chrome.tabs.query({ lastFocusedWindow: true }, (tabs) => {
      //active : true 제거 => 탭 모든 정보 가져옴
      console.log(tabs);

      const favIconUrl = tabs.map((tab) => tab.favIconUrl);
      const title = tabs.map((tab) => tab.title);
      const url = tabs.map((tab) => tab.url);

      setTabUrl({ ...tabUrl, favIconUrl: favIconUrl, title: title, url: url });
    });
  };

  const addUrl = () => {
    console.log(tabUrl);
  };

  useEffect(() => {
    searchUrl();
  }, []);

  return (
    <Wrapper>
      <button onClick={addUrl}>check</button>
    </Wrapper>
  );
}
