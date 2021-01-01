import '../../assets/img/icon-34.png';
import '../../assets/img/icon-128.png';

console.log('This is the background page.');
console.log('Put the background scripts here.');

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log('[background] chrome.runtime.onMessage.addListener()');

  if (request.greeting === 'backgroundhello') {
    console.log('[background] request:' + request.greeting);
    // TODO
    sendResponse({ farewell: 'contentgoodbye' });
  }
  if (request.greeting === 'popupinfo') {
    console.log('popup에서 온 정보' + request.greeting);
    // TODO
    sendResponse({ farewell: 'background에서 보낸 정보' });
  }
});
