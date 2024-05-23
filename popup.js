
document.addEventListener('DOMContentLoaded', () => {
  chrome.runtime.sendMessage({ action: "getCounts" }, (response) => {
    document.getElementById('tab-count').textContent = response.tabCount;
    document.getElementById('window-count').textContent = response.windowCount;
    document.getElementById('tabs-opened').textContent = response.tabsOpened;
    document.getElementById('tabs-closed').textContent = response.tabsClosed;
  });
});
