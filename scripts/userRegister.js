async function attemptCreateUser(url = '') {

    let registerUsername = document.getElementById('registerUsername').value;
    let registerFirstname = document.getElementById('registerFirstname').value;
    let registerLastname = document.getElementById('registerLastname').value;
    let registerEmailname = document.getElementById('registerEmailname').value;
    let registerPassword = document.getElementById('registerPassword').value;

    /*
    TODO
    * Captcha logic
    * tell user if their username or email is already taken (nothing else)
    * Need to know the res code for our API calls
    */

    console.log('>>>registerUsername: ' + registerUsername);
    console.log('>>>registerFirstname: ' + registerFirstname);

    let bodyData = {
        username: registerUsername,
        fname: registerFirstname,
        lname: registerLastname,
        email: registerEmailname,
        password: registerPassword,
        active: true
    }

    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
        },
        //credentials: 'include', TODO this is how we will include the credentials
        body: JSON.stringify(bodyData)
    });
    return await response.json(); // parses JSON response into native JavaScript objects
}

function postUserRegistration() {
    console.log('post user registration clicked');
    queryString = 'http://localhost:3000/users';
    console.log('queryString: ' + queryString);
    attemptCreateUser(queryString)
        .then((data) => {
            if(data){
                console.log('response data: ' + JSON.stringify(data));
                sessionStorage.setItem(`LoggedInUser`, JSON.stringify(data));
                window.location.href = './mainPage.html';
            } else {
                let loginSnackbar = document.getElementById('loginSnackbar');
                loginSnackbar.innerHTML = 'Failed To Register';
            }
        })
        .catch(err => {
            console.log('error: ' + err);
            // set Error Snack bar notification
            let loginSnackbar = document.getElementById('loginSnackbar');
            loginSnackbar.innerHTML = 'Failed To Register';
        });
}

document.querySelector('#submitRegistration').addEventListener('click', postUserRegistration);