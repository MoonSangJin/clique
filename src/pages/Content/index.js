import { printLine } from './modules/print';

console.log('Content script works!');
console.log('Must reload extension for modifications to take effect.');
printLine("Using the 'printLine' function from the Print Module");

// const scrollHeight = window.scrollY;
// console.log(`scroll 위치는 ${scrollHeight}`);
chrome.runtime.sendMessage({ greeting: 'backgroundhello' }, (response) => {
  console.log('[contentscript] chrome.runtime.sendMessage()');
  console.log(response.farewell);
});
