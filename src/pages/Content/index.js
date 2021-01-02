import { printLine } from './modules/print';

console.log('Content script works!');
console.log('Must reload extension for modifications to take effect.');
printLine("Using the 'printLine' function from the Print Module");

// chrome.runtime.sendMessage({ greeting: 'backgroundhello' }, (response) => {
//   console.log('[contentscript] chrome.runtime.sendMessage()');
//   console.log(response.farewell);
// });

// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//   if (request.greeting2 === 'a') {
//     console.log('content received from background');
//     const scrollHeight = window.scrollY;
//     sendResponse({ farewell: scrollHeight });
//   }
// });
let last_known_scroll_position = 0;
window.addEventListener('scroll', (e) => {
  last_known_scroll_position = window.scrollY;

  let contentTitle = document.title;
  let items = { title: contentTitle, scrollHeight: last_known_scroll_position };
  chrome.runtime.sendMessage({ result: items }, (response) => {
    console.log('content에서 보냄');
    console.log(response.farewell);
  });
});
