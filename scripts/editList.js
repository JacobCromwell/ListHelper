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
    console.log('Getting THEM lists!!!');
    getItem('http://localhost:3000/item/' + list_id)
      .then((data) => {
        console.log('response data: ' + data); // JSON data parsed by `response.json()` call
      });
  }

document.querySelector('#editList').addEventListener('click', getItemWithId(1))