import { getNewModal } from './ModalForScroll';


export class CurrentPageInfo {
  constructor(pageTitle, scrollPosition) {
    this.pageTitle = pageTitle;
    this.scrollPosition = scrollPosition;
    this.pageInfoForClique = {
      id: 0,
      bookmarkFolderId: 0,
      title: '',
      url: '',
      scrollPos: 0,
      faviconUrl: '',
    };
    this.isBookmarkedPage = false;

    chrome.storage.sync.get(['bookmarkList'], function(result) {
      let foundBookmark = result.bookmarkList.find((bookmark) => bookmark.url.includes(window.location.href));

      if (foundBookmark) {
        this.isBookmarkedPage = true;
        this.pageInfoForClique = {
          id: foundBookmark.id,
          bookmarkFolderId: foundBookmark.id,
          title: foundBookmark.title,
          url: foundBookmark.url,
          scrollPos: foundBookmark.scrollPos,
          faviconUrl: foundBookmark.faviconUrl,
        };

        if (this.pageInfoForClique.scrollPos > 0) {
          let modal = getNewModal(this.pageInfoForClique.scrollPos * document.body.offsetHeight);
          document.body.appendChild(modal);
        }
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
      let currentY = window.scrollY;
      let documentHeight = document.body.offsetHeight;

      let onePercent = 0.01;

      if ((currentY / documentHeight) - (self.scrollPosition / documentHeight) >= onePercent) {
        self.scrollPosition = currentY;
        self.setInfoAtChromeRuntime();
      }
    })
  }
}
