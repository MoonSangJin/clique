export const getGoogleOAuthToken = async () => {
  return new Promise((resolve, reject) => {
    try {
      chrome.identity.getAuthToken({interactive: true}, function(token) {
        resolve(token);
      });
    } catch (exception) {
      reject(exception);
    }
  });
};
