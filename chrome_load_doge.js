var loaded = false;
chrome.browserAction.onClicked.addListener(function(tab) {
  if (!loaded) {
    chrome.tabs.executeScript(null, { file: "libdoge.mod.min.js" });
    loaded = true;
  }
});