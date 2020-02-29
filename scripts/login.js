/*
  TODO
  need to pass in the actual list_id to getItemWithId instead of using hard-coded value
*/

/*
let loginUsername = document.getElementById('loginUsername').value;
let loginPassword = document.getElementById('loginPassword').value;

console.log('>>>loginUsername: ' + loginUsername);
console.log('>>>loginPassword: ' + loginPassword);
*/
async function attemptLogin(url = '') {
    
    let loginUsername = document.getElementById('loginUsername').value;
    let loginPassword = document.getElementById('loginPassword').value;

    console.log('>>>loginUsername: ' + loginUsername);
    console.log('>>>loginPassword: ' + loginPassword);

    let bodyData = {
        username: loginUsername,
        password: loginPassword 
    }
    
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bodyData)
    });
    return await response.json(); // parses JSON response into native JavaScript objects
  }
  
function postUserLogin() {
    console.log('post user login clicked');
  queryString = 'http://localhost:3000/users/login';
  console.log('queryString: ' + queryString);
  attemptLogin(queryString)
    .then((data) => {
      console.log('response data: ' + data); // JSON data parsed by `response.json()` call
      //sessionStorage.setItem(`LoggedInUser`, JSON.stringify(data));
    });
}

document.querySelector('#submitLogin').addEventListener('click', postUserLogin);