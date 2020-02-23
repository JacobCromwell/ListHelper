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
    let nonPurchasedItems = '';
    let purchasedItems = '';
    for (item of parsedSessionItems) {
        //populationString += item.url;
        if(item.purchased === false){
          nonPurchasedItems += `
          <div class="item">
              <img class="itemPicture" src="../images/tv.png" />
              <p><b>URL: </b>${item.url}</p>
              <div class="itemButton">
                  <a href="${item.url}"><button class="dfltbutton">Go To Site</button></a>
                  <button class="dfltbutton">Mark As Purchased</button>
              </div>
          </div>
          `;
        } else if(item.purchased === true){
          if(purchasedItems === ''){
            purchasedItems += `<p id="purchasedItemsDivider">-------------------Purchased Items-------------------</p>`
          }
          purchasedItems += `
          <div class="itemPurchased">
              <img class="itemPicture" src="../images/tv.png" />
              <p><b>URL: </b>${item.url}</p>
              <div class="itemButton">
                  <a href="${item.url}"><button class="dfltbutton">Go To Site</button></a>
                  <button class="dfltbutton">Not Purchased</button>
              </div>
          </div>
          `;
        }
    }
    populationString += nonPurchasedItems + purchasedItems;
    populateParagraph.innerHTML = populationString;
  }
  
  function getSessionItems(list_id) {
    console.log('>>3<<');
    let sessionItems = sessionStorage.getItem(`listItems_${list_id}`);
    let parsedSessionItems = JSON.parse(sessionItems);
    return parsedSessionItems;
  }