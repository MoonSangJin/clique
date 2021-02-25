import { logOpenBookmark } from '../Services/googleAnalytics';


const openBookmark = (url, scrollPos, id, target = '') => {
  logOpenBookmark(id);
  chrome.storage.sync.set({
    [url]: scrollPos,
  });
  window.open(url, target);
};

export default openBookmark;
