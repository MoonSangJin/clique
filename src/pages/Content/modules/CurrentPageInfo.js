import { getNewModal } from './ModalForScroll';


export class CurrentPageInfo {
  constructor(pageTitle, scrollPosition) {
    this.pageTitle = pageTitle;
    this.scrollPosition = scrollPosition;
    const currentPageUrl = window.location.href;

    chrome.storage.sync.get([currentPageUrl], function(result) {
      const savedScrollPosition = result[currentPageUrl];

      if (savedScrollPosition && savedScrollPosition > 0) {
        let modal = getNewModal(savedScrollPosition * document.body.offsetHeight);
        document.body.appendChild(modal);

        chrome.storage.sync.remove([currentPageUrl]);
      }
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
