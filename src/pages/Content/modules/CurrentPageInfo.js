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

      if (foundBookmark && foundBookmark.scrollPos >= 0) {
        this.isBookmarkedPage = true;
        this.pageInfoForClique = {
          id: foundBookmark.id,
          bookmarkFolderId: foundBookmark.id,
          title: foundBookmark.title,
          url: foundBookmark.url,
          scrollPos: foundBookmark.scrollPos,
          faviconUrl: foundBookmark.faviconUrl,
        };
      }
    });
  }

  setInfoAtChromeRuntime() {
    chrome.runtime.sendMessage({
      title: this.pageTitle,
      scrollHeight: this.scrollPosition,
    });
  }

  setInfoAtClique() {
    // axios.patch()
  }

  handlePageLoadEvent() {
    this.setInfoAtChromeRuntime();

    if (this.pageInfoForClique && this.pageInfoForClique.scrollPos > 0) {
    // if (true) {

      let modal = getNewModal();
      document.body.appendChild(modal);
    }
  }

  handleScrollEvent(self) {
    return () => {
      let currentY = window.scrollY;
      let documentHeight = document.body.offsetHeight;

      let onePercent = 0.01;

      if ((currentY / documentHeight) - (self.scrollPosition / documentHeight) >= onePercent) {
        self.scrollPosition = currentY;
        self.setInfoAtChromeRuntime();

        if (self.isBookmarkedPage) {
          // patch bookmark info to clique server
          this.setInfoAtClique();
        }
      }
    };
  }
}
