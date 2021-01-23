const _getUrlParams = (url) => {
  let params = {};
  url.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (str, key, value) {
    params[key] = value;
  });
  return params;
};

export const refineUrl = (url) => {
  const googleSearchPageUrl = 'www.google.com/search?';

  if (url.includes(googleSearchPageUrl)) {
    return (
      url.split(googleSearchPageUrl)[0] +
      googleSearchPageUrl +
      'q=' +
      _getUrlParams(url).q
    );
  }

  return url;
};

export const isValidUrl = (url) => {
  let urlRegex = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

  return urlRegex.test(url);
};
