import '../../assets/img/icon-16.png';
import '../../assets/img/icon-34.png';
import '../../assets/img/icon-128.png';

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request) {
    const { title, scrollHeight } = request;
    chrome.storage.local.set({
      [title]: {
        title: title,
        scroll: scrollHeight,
      },
    });
    sendResponse({ farewell: 'back이 받음' });
  }
});
