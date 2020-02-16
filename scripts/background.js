console.log('background script iteration 8');

/*
Working
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
*/


/* 1
chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab){
    console.log('buttonClicked function hit');
    let currentTab = "";
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
        currentTab = tabs[0].url;
        console.log('currentTab: ', currentTab);
        chrome.tabs.sendMessage(tab.id, currentTab);
    });
}
*/

/* 2
// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
    // Send a message to the active tab
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
    });
});
*/

/*
function handleMessage(request, sender, sendResponse) {
  console.log("Message from the content script: " + request.greeting);

  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
      currentTab = tabs[0].url;
      sendResponse({response: currentTab});
  });

  sendResponse({response: "Response from background script"});
}

chrome.runtime.onMessage.addListener(handleMessage);
*/

// use chrome.tabs.query
