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
        //populationString += item.url;
        populationString += `
        <div class="item">
            <img class="itemPicture" src="../images/tv.png" />
            <p><b>URL: </b>${item.url}</p>
            <div class="itemButton">
                <button class="dfltbutton">Go To Site</button>
                <button class="dfltbutton">Mark As Purchased</button>
            </div>
        </div>
        `;
    }
    populateParagraph.innerHTML = populationString;
  }
  
  function getSessionItems(list_id) {
    console.log('>>3<<');
    let sessionItems = sessionStorage.getItem(`listItems_${list_id}`);
    let parsedSessionItems = JSON.parse(sessionItems);
    return parsedSessionItems;
  }