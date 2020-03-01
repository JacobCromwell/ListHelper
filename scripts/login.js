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
            if(data.length > 0){
                console.log('response data: ' + JSON.stringify(data[0]));
                sessionStorage.setItem(`LoggedInUser`, JSON.stringify(data[0]));
                window.location.href = './mainPage.html';
            } else {
                let loginSnackbar = document.getElementById('loginSnackbar');
                loginSnackbar.innerHTML = 'Failed To Login';    
            }
        })
        .catch(err => {
            console.log('error: ' + err);
            // set Error Snack bar notification
            let loginSnackbar = document.getElementById('loginSnackbar');
            loginSnackbar.innerHTML = 'Failed To Login';
        });
}

document.querySelector('#submitLogin').addEventListener('click', postUserLogin);