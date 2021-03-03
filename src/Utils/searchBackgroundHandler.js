export const getSearchInputBackgroundUrl = () => {
  return localStorage.getItem('SearchBackgroundUrl');

};

export const setSearchInputBackgroundUrl = (url) => {
  localStorage.setItem('SearchBackgroundUrl', url);
};
