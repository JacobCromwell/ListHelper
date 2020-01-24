console.log('background 12');

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
  chrome.tabs.query({active: true, lastFocusedWindow: true}, function(arrayOfTabs) {
		var tab = arrayOfTabs[0];
    let msg = {
      url: tab.url
    }
    chrome.tabs.sendMessage(tab.id, msg);
  });
}