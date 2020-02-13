/*
Original
window.addEventListener('load', function load(event) {
  var createButton = document.getElementById('saveItem');
  createButton.addEventListener('click', function () { saveItem(); });
});
*/

/*
function saveItem() {
  console.log('currentTab: ', currentTab);
  alert('currentTab: ', currentTab);

  let querying = browser.tabs.query({});
  querying.then(getTabInfo, onError);
}
*/

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

async function getCurrentTabUrl() {
  let currentTabUrl = '';
  console.log('1 currentTabUrl: ' + currentTabUrl);
  var queryInfo = {
    active: true,
    currentWindow: true,
  }

  chrome.tabs.query(queryInfo, function (tabs) {
    var tab = tabs[0]
    //console.log('tab url: ' + tab.url);
    currentTabUrl = tab.url;
    console.log('2 currentTabUrl: ' + currentTabUrl);
    return currentTabUrl
  })
}

async function foo() {
  return 42;
}

/*
async function getCurrentTabUrl() {
  let currentTabUrl = '';
  console.log('3 currentTabUrl: ' + currentTabUrl);
  var queryInfo = {
    active: true,
    currentWindow: true,
  }
  tabWork(currentTabUrl, queryInfo).then(result => {
    currentTabUrl = result;
    console.log('final currentTabUrl: ' + currentTabUrl);
    currentTabUrl;
  }).catch(error => {
    console.log(error);
  });
}

async function tabWork(currentTabUrl, queryInfo) {
  chrome.tabs.query(queryInfo, function (tabs) {
    var tab = tabs[0]
    console.log('TABWORK currentTabUrl: ' + currentTabUrl);
    currentTabUrl = tab.url;
  })
}
*/


async function postItem(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return await response.json(); // parses JSON response into native JavaScript objects
}

function postItemWithPayload(payload) {
  postItem('http://localhost:3000/item', payload)
    .then((data) => {
      console.log('response data: ' + data); // JSON data parsed by `response.json()` call
    });
}

function postItemProcess() {
  let pageUrl = getCurrentTabUrl()
  console.log('>>>pageUrl: ' + pageUrl);
  let payload = {
    list_id: 1,
    url: pageUrl,
    img_url: 'demo',
    purchased: 0,
    title: 'demo-title',
    description: 'demo-description',
    create_date: new Date(Date.now()).toLocaleString(),
    update_date: new Date(Date.now()).toLocaleString()
  }
  console.log('payload: ' + payload);
  postItemWithPayload(payload);
  //let pageUrl = await getCurrentTabUrl();
  /*
  let pageUrl;
  getCurrentTabUrl().then(result => {
    console.log('444 result 444: ' + result);
    pageUrl = result;
    console.log('>>>pageUrl: ' + pageUrl);
    let payload = {
      list_id: 1,
      url: pageUrl,
      img_url: 'demo',
      purchased: 0,
      title: 'demo-title',
      description: 'demo-description',
      create_date: new Date(Date.now()).toLocaleString(),
      update_date: new Date(Date.now()).toLocaleString()
    }
    console.log('payload: ' + payload);
    postItemWithPayload(payload);
  }).catch(error => {
    console.log(error); // Error: Oh dear! It's broken!
  });
  */
}



document.querySelector('#saveItem').addEventListener('click', postItemProcess)