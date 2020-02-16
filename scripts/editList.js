/*
  TODO
  need to pass in the actual list_id to getItemWithId instead of using hard-coded value
*/

//document.getElementById("editList").addEventListener("click", getLists);
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
  
  function getItemWithId(list_id) {
    queryString = 'http://localhost:3000/item/' + list_id;
    console.log('queryString: ' + queryString);
    getItem(queryString)
      .then((data) => {
        console.log('response data: ' + data); // JSON data parsed by `response.json()` call
      });
  }

document.querySelector('#editList').addEventListener('click', getItemWithId(1))