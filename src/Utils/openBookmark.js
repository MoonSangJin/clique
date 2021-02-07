const openBookmark = (url, scrollPos, target = '') => {
  chrome.storage.sync.set({
    [url]: scrollPos,
  });
  window.open(url, target);
};

export default openBookmark;
