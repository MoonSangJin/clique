import ReactGA from 'react-ga';


export const logOpenBookmarkAll = (folderId) => {
  ReactGA.event({
    category: 'Folder',
    action: 'Open  all - folder id',
    label: folderId,
  });
};

export const logShareFolder = (folderId) => {
  ReactGA.event({
    category: 'Folder',
    action: 'Share - folder id ',
    label: folderId,
  });
};

export const logOpenBookmark = (bookmarkId) => {
  ReactGA.event({
    category: 'Bookmark',
    action: 'Open - bookmark id',
    label: bookmarkId,
  });
};
