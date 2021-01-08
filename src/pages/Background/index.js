import '../../assets/img/icon-34.png';
import '../../assets/img/icon-128.png';

console.log('This is the background page.');
console.log('Put the background scripts here.');

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log('[background] chrome.runtime.onMessage.addListener()');

  if (request) {
    console.log(request);
    const { title, scrollHeight } = request;
    // chrome.storage.local.set({ [title]: scrollHeight });
    chrome.storage.local.set({
      [title]: {
        title: title,
        scroll: scrollHeight,
      },
    });
    sendResponse({ farewell: 'back이 받음' });
  }
});
