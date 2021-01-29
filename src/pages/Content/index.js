import { CurrentPageInfo } from './modules/CurrentPageInfo';
import { throttle } from './modules/throttle';


let currentPageInfo = new CurrentPageInfo(document.title, 0);


window.addEventListener('load', () => {
  currentPageInfo.handlePageLoadEvent();
});
window.addEventListener('scroll', throttle(currentPageInfo.handleScrollEvent(currentPageInfo), 300));
