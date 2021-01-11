export const getAccessToken = async () => {
  return new Promise((resolve, reject) => {
    try {
      chrome.storage.sync.get(['access'], function(result) {
        resolve(result.access);
      });
    } catch (ex) {
      reject(ex);
    }
  });
};
