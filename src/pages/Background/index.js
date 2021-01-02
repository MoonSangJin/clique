import '../../assets/img/icon-34.png';
import '../../assets/img/icon-128.png';

console.log('This is the background page.');
console.log('Put the background scripts here.');

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log('[background] chrome.runtime.onMessage.addListener()');

  if (request.greeting === 'findScrollHeight') {
    console.log('popup에서 각 content 스크롤 찾으래');
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { greeting2: 'a' }, (response) => {
        console.log(response.farewell);
      });
    });
  }
});
