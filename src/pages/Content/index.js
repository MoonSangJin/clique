let last_known_scroll_position = 0;
let contentTitle = document.title;

let init = {
  title: contentTitle,
  scrollHeight: last_known_scroll_position,
};

chrome.runtime.sendMessage(init);

const onScroll = () => {
  last_known_scroll_position = window.scrollY;
  let items = {
    title: contentTitle,
    scrollHeight: last_known_scroll_position / document.body.offsetHeight,
  };
  chrome.runtime.sendMessage(items);
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
