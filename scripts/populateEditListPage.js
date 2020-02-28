window.addEventListener('load', function load(event) {
    var createButton = document.getElementById('populateMe');
    updateElement();
  });
  
  function updateElement() {
    let parsedSessionItems = getSessionItems(1);
    let populateParagraph = document.getElementById("populateMe");
    let populationString = '';
    let nonPurchasedItems = '';
    let purchasedItems = '';
    // Create the html of the page
    for (item of parsedSessionItems) {
        if(item.purchased === false){
          nonPurchasedItems += `
          <div class="viewEditItem notPurchasedItem" id=${item.id}>
              <img class="itemPicture" src="../images/tv.png" />
              <p><b>URL: </b>${item.url}</p>
              <div class="itemButton">
                  <a href="${item.url}"><button class="dfltbutton">Go To Site</button></a>
                  <button class="dfltbutton" id="markAsPurchasedButton${item.id}">Mark As Purchased</button>
              </div>
          </div>
          `;
        } else if(item.purchased === true){
          if(purchasedItems === ''){
            purchasedItems += `<p id="purchasedItemsDivider">-------------------Purchased Items-------------------</p>`
          }
          purchasedItems += `
          <div class="viewEditItem purchasedItem" id=${item.id}>
              <img class="itemPicture" src="../images/tv.png" />
              <p><b>URL: </b>${item.url}</p>
              <div class="itemButton">
                  <a href="${item.url}"><button class="dfltbutton">Go To Site</button></a>
                  <button class="dfltbutton" >Not Purchased</button>
              </div>
          </div>
          `;
        }
    }
    populationString += nonPurchasedItems + purchasedItems;
    populateParagraph.innerHTML = populationString;

    //create the event listeners
    for(item of parsedSessionItems){
      console.log('itemId for eventListenerCreation: ' + item.id);
      if(item.purchased === false){
        document.getElementById(`markAsPurchasedButton${item.id}`).addEventListener("click", function() {markItemAsPurchased(item.id)});
      } else if(item.purchased === true){
        //document.getElementById(`markItemAsNOTPurchased${item.id}`).addEventListener("click", markItemAsNOTPurchased(item.id));
      }
    }
  }
  
  function getSessionItems(list_id) {
    let sessionItems = sessionStorage.getItem(`listItems_${list_id}`);
    let parsedSessionItems = JSON.parse(sessionItems);
    return parsedSessionItems;
  }

  /*
  TODO these functions need to call the PUT /item/:id API to update the purchased flag
  */
  function markItemAsPurchased(itemId) {
    console.log('itemId: ' + itemId);
    var element = document.getElementById(`${itemId}`);
    console.log('element: ' + element);
    element.classList.toggle("purchasedItem");
  }
  
  function markItemAsNOTPurchased(itemId) {
    var element = document.getElementById(`${itemId}`);
    console.log('element: ' + element);
    element.classList.toggle("purchasedItem");
  }