import React from 'react';
import logo from '../../assets/img/logo.svg';
import Greetings from '../../containers/Greetings/Greetings';
import './Popup.css';

const Popup = () => {
  const handleUrl = () => {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
      let url = tabs[0].url;
      alert(url);
      /* popup 창에서 현재 url check, alert로는 나오는데 개발자도구에서 console창에서 체크안됨.
      아마 popup창 따로 content창 따로 console 있는거 같음*/
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
