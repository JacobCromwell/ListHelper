window.addEventListener('load', function load(event) {
  let helperListInScopeId = sessionStorage.getItem(`HelperListInScope`);
  getItemWithId(helperListInScopeId);
});

function updateElement(sessionItems) {
  let populateParagraph = document.getElementById("populateMe");
  let populationString = '';
  let nonPurchasedItems = '';
  let purchasedItems = '';
  // Create the html of the page
  for (item of sessionItems) {
    if (item.purchased === false) {
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
    } else if (item.purchased === true) {
      if (purchasedItems === '') {
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
  populationString += `<a href="mainPage.html"><button class="footButtons">Cancel</button></a>`
  populateParagraph.innerHTML = populationString;

  //create the event listeners
  for (item of sessionItems) {
    console.log('itemId for eventListenerCreation: ' + item.id);
    if (item.purchased === false) {
      document.getElementById(`markAsPurchasedButton${item.id}`).addEventListener("click", function () { markItemAsPurchased(item.id) });
    } else if (item.purchased === true) {
      //document.getElementById(`markItemAsNOTPurchased${item.id}`).addEventListener("click", markItemAsNOTPurchased(item.id));
    }
  }
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


// JRC TODO all of these calls to the API should be in a separate service
/*
-------------- QUERY DB GET Helper List Items-----------------
helper_lists/${helperListInScopeId}/items/
--------------------------------------------------------------
*/
async function getItem(url = '') {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return await response.json(); // parses JSON response into native JavaScript objects
}

function getItemWithId(helperListInScopeId) {
  queryString = `http://localhost:3000/helper_lists/${helperListInScopeId}/items/`;
  console.log('queryString: ' + queryString);
  getItem(queryString)
    .then((data) => {
      //sessionStorage.setItem(`listItems_${helperListInScopeId}`, JSON.stringify(data.items));
      updateElement(data.items);
    });
}

/*
-------------- QUERY DB PUT Item Purchased flag-----------------
helper_lists/${helperListInScopeId}/items/
----------------------------------------------------------------
*/