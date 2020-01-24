//document.getElementById("saveItem").addEventListener("click", saveItemFunc);

/*
chrome.runtime.onMessage.addListener(givenTabUrl);

function givenTabUrl(tabUrl, sender, sendResponse){
  alert('tabUrl = ', tabUrl);
}
*/


// Receiver
/* 3
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting == "hello")
      sendResponse({farewell: "goodbye"});
  });
  */

//document.getElementById("saveItem").addEventListener("click", saveItemFunc);
let currentTab = '';
function handleResponse(message) {
  console.log(`Message from the background script:  ${message.response}`);
  currentTab = message;
  alert('currentTab: ', currentTab);
}

function handleError(error) {
  console.log(`Error: ${error}`);
}

function notifyBackgroundPage(e) {
  var sending = browser.runtime.sendMessage({
    greeting: "Greeting from the content script"
  });
  sending.then(handleResponse, handleError);  
}

//document.getElementById("saveItem").addEventListener("click", handleResponse);
//window.addEventListener("click", notifyBackgroundPage);