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

window.addEventListener('scroll', function (e) {
  last_known_scroll_position = window.scrollY;
  console.log(last_known_scroll_position);
});
