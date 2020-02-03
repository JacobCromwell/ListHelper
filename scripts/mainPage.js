//document.getElementById("saveItem").addEventListener("click", saveItem);

function saveItem(){
    alert('Saving Item');
    let tabUrl = "";

    //let currentTab = browser.tabs.getCurrent;
    console.log('currentTab: ', currentTab);
    alert('currentTab: ', currentTab);

    let querying = browser.tabs.query({});
    querying.then(getTabInfo, onError);

}

function getTabInfo(tabs) {
    for (let tab of tabs) {
      // tab.url requires the `tabs` permission
      console.log(tab.url);
    }
  }
  
  function onError(error) {
    console.log(`Error: ${error}`);
  }

// New Code
function updateElement() {
  let paragraphs = document.getElementsByTagName('p');
  for (elt of paragraphs) {
    let secretMsg = 'ZAZAZA'
    elt.innerHTML = '1 UPDATED p TAG ' + secretMsg;
  }
}