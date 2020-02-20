window.addEventListener('load', function load(event) {
    console.log('>>1<<');
    var createButton = document.getElementById('populateMe');
    updateElement();
    //createButton.addEventListener('load', function () { updateElement(); });
  });

  //document.getElementById("myFrame").addEventListener("load", myFunction);
  
  function updateElement() {
    console.log('>>2<<');
    let parsedSessionItems = getSessionItems(1);
    let populateParagraph = document.getElementById("populateMe");
    let populationString = '';
    for (item of parsedSessionItems) {
        populationString += item.url;
    }
    populateParagraph.innerHTML = populationString;
  }
  
  function getSessionItems(list_id) {
    console.log('>>3<<');
    let sessionItems = sessionStorage.getItem(`listItems_${list_id}`);
    let parsedSessionItems = JSON.parse(sessionItems);
    return parsedSessionItems;
  }