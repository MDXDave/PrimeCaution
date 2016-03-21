chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete') {
    chrome.tabs.executeScript(tab.ib, {
		file: 'PrimeCaution.js'
	});
  }
});