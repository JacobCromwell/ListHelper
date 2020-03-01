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
}



document.querySelector('#saveItem').addEventListener('click', postItemProcess)