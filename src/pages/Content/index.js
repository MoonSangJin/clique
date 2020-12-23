import { printLine } from './modules/print';

console.log('Content script works!');
console.log('Must reload extension for modifications to take effect.');
printLine("Using the 'printLine' function from the Print Module");

/*chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(
    sender.tab
      ? 'from a content script:' + sender.tab.url
      : 'from the extension'
  );

  if (request.greeting === 'hello') {
    sendResponse({ farewell: 'goodbye' });
  }
});
*/

//message passing 예제 코드. background도 건드려야 될 거 같음...
