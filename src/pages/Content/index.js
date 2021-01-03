import { printLine } from './modules/print';

console.log('Content script works!');
console.log('Must reload extension for modifications to take effect.');
printLine("Using the 'printLine' function from the Print Module");

let last_known_scroll_position = 0;
let contentTitle = document.title;

const onScroll = () => {
  last_known_scroll_position = window.scrollY;

  let items = {
    title: contentTitle,
    scrollHeight: last_known_scroll_position,
  };

  chrome.runtime.sendMessage(items, (response) => {
    console.log('content에서 보냄');
    console.log(response.farewell);
  });
};

function throttle(fn, wait) {
  let time = Date.now();
  return function () {
    if (time + wait - Date.now() < 0) {
      fn();
      time = Date.now();
    }
  };
}

window.addEventListener('scroll', throttle(onScroll, 300));
