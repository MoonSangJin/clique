import { getNewModal } from './ModalForScroll';


export class CurrentPageInfo {
  constructor(pageTitle, scrollPosition) {
    this.pageTitle = pageTitle;
    this.scrollPosition = scrollPosition;

    chrome.storage.sync.get(['bookmarkList'], function(result) {
      // if (this.pageInfoForClique.scrollPos > 0) {
      //   let modal = getNewModal(this.pageInfoForClique.scrollPos * document.body.offsetHeight);
      //   document.body.appendChild(modal);
      // }
    });
  }

  setInfoAtChromeRuntime() {
    let documentHeight = document.body.offsetHeight;

    chrome.runtime.sendMessage({
      title: this.pageTitle,
      scrollHeight: this.scrollPosition / documentHeight,
    });
  }

  setInfoAtClique() {
    // Todo(maitracle): scroll 위치를 업데이트하는 코드 추가해야 함.
  }

  handlePageLoadEvent() {
    this.setInfoAtChromeRuntime();
  }

  handleScrollEvent(self) {
    return (() => {
      self.scrollPosition = window.scrollY;
      self.setInfoAtChromeRuntime();
    })
  }
}
