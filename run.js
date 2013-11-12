chrome.browserAction.onClicked.addListener(function(tab) {
  if (typeof LIBDOGE == 'undefined') {
    chrome.tabs.executeScript(null, { file: "libdoge.mod.min.js" });
  }
  chrome.tabs.executeScript({code: 'LIBDOGE.controller.buyDoge()'});
});