import React from 'react';
import logo from '../../assets/img/logo.svg';
import Greetings from '../../containers/Greetings/Greetings';
import './Popup.css';

const Popup = () => {
  const handleUrl = () => {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
      const url = tabs[0].url;
      const favIconUrl = tabs[0].favIconUrl;
      const title = tabs[0].title;
      console.log(url);
      console.log(favIconUrl);
      console.log(title);

      alert(url);
      // popup창 console check는 popup창에서 오른쪽클릭해서 개발자도구 따로 켜야됨, 일단 현재 탭 url만 alert로 띄움
    });
  };

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

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/pages/Popup/Popup.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={handleUrl}>click</button>
      </header>
    </div>
  );
};

export default Popup;
