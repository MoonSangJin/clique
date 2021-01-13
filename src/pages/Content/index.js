import { printLine } from './modules/print';

console.log('Content script works!');
console.log('Must reload extension for modifications to take effect.');
printLine("Using the 'printLine' function from the Print Module");

let confirm_variable = confirm('저장된 스크롤 위치로 이동하시겠습니까?');
confirm_variable
  ? window.scrollTo({ top: 800, behavior: 'smooth' })
  // Todo(maitracle): console.log 대신 printLine을 사용하면 confirm창이 뜨지 않는 버그가 없어지는 느낌... 해당 버그를 확인하고 해결한다.
  : printLine('이동안함');

let last_known_scroll_position = 0;
let contentTitle = document.title;

let init = {
  title: contentTitle,
  scrollHeight: last_known_scroll_position,
};
chrome.runtime.sendMessage(init, (response) => {
  console.log('content에서 처음 보냄');
  console.log(response.farewell);
});

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
