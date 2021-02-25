import ReactGA from 'react-ga';


export const logOpenBookmarkAll = (folderId) => {
  ReactGA.event({
    category: 'Bookmark',
    action: 'Open all',
    label: 'folder id',
    value: folderId,
  });
};

export const logOpenBookmark = (bookmarkId) => {
  ReactGA.event({
    category: 'Bookmark',
    action: 'Open a bookmark',
    label: 'bookmark id',
    value: bookmarkId,
  });
};
