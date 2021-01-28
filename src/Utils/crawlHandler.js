import axios from 'axios';
import cheerioModule from 'cheerio';

const _reformatUrl = (url) => url.includes('http') ? url : `https://${url}`;
const _reformatFaviconUrl = (faviconUrl, hostCandidate) => {
  if (faviconUrl) {
    return faviconUrl.includes('http') ? faviconUrl : hostCandidate + faviconUrl;
  }

  return ''
};

const _getHTML = async (targetUrl) => {
  try {
    return await axios.get(targetUrl);
  } catch (error) {
  }
};

const _getInfoFromHtml = (html) => {
  const cheerData = cheerioModule.load(html.data);

  return {
    title: cheerData('title').text(),
    faviconUrl: cheerData('link[rel="shortcut iconddd"]').attr('href'),
  };
};

export const crawlPage = async (targetUrl) => {
  const reformedUrl = _reformatUrl(targetUrl);
  const html = await _getHTML(reformedUrl);
  const crawledInfo = _getInfoFromHtml(html);

  return {
    url: reformedUrl,
    title: crawledInfo.title,
    scrollPos: 0,
    faviconUrl: _reformatFaviconUrl(crawledInfo.faviconUrl, reformedUrl),
  }
};
