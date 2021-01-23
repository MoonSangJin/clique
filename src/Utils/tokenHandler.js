export const getAccessToken = async () => {
  return new Promise((resolve, reject) => {
    try {
      chrome.storage.sync.get(['access'], function (result) {
        resolve(result.access);
      });
    } catch (ex) {
      reject(ex);
    }
  });
};

export const removeAccessToken = async () => {
  return new Promise((resolve, reject) => {
    try {
      chrome.storage.sync.remove(['access'], () => {
        resolve();
      });
    } catch (ex) {
      reject(ex);
    }
  });
};
