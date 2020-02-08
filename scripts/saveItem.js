
window.addEventListener('load', function load(event) {
  var createButton = document.getElementById('saveItem');
  createButton.addEventListener('click', function () { saveItem(); });
});

function saveItem() {
  console.log('This is where I would save my item, if I had one!!!');
}

//document.getElementById("saveItem").addEventListener("click", saveItemFunc);
/*
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
*/

//document.getElementById("saveItem").addEventListener("click", handleResponse);
//window.addEventListener("click", notifyBackgroundPage);