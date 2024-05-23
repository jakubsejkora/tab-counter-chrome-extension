
let tabsOpened = 0;
let tabsClosed = 0;

chrome.runtime.onInstalled.addListener(() => {
  console.log("Tab Counter Extension Installed");
});

chrome.tabs.onCreated.addListener(() => {
  tabsOpened++;
});

chrome.tabs.onRemoved.addListener(() => {
  tabsClosed++;
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getCounts") {
    chrome.windows.getAll({}, (windows) => {
      chrome.tabs.query({}, (tabs) => {
        sendResponse({
          tabCount: tabs.length,
          windowCount: windows.length,
          tabsOpened: tabsOpened,
          tabsClosed: tabsClosed
        });
      });
    });
    return true; // Will respond asynchronously.
  }
});
