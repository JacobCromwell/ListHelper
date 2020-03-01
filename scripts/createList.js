document.querySelector('#submitList').addEventListener('click', postHelperListPromise);

function assembleBodyData(){
    console.log('inside of assembleBodyData');
    let inputListName = document.getElementById('inputListName').value;
    let inputPrivateFlag = document.getElementById('inputPrivateFlag').value;
    let inputListType = document.getElementById('inputListType').value;
    let loggedInUser = JSON.parse(sessionStorage.getItem(`LoggedInUser`));

    if(inputPrivateFlag==='private'){
        inputPrivateFlag = 1;
    } else {
        inputPrivateFlag = 0;
    }

    let bodyData = {
        user_id: loggedInUser.id,
        private: inputPrivateFlag,
        list_type: inputListType,
        list_name: inputListName
    };
    console.log('assembleBodyData bodyData: ' + JSON.stringify(bodyData));

    return bodyData;
}

async function postHelperList(url = '') {
    console.log('inside of postHelperList');
    let bodyData = assembleBodyData();
    console.log('postHelperList bodyData: ' + JSON.stringify(bodyData));

    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyData)
    });
    return await response.json();
}

function postHelperListPromise() {
    queryString = `http://localhost:3000/helper_lists/`;
    console.log('queryString: ' + queryString);
    postHelperList(queryString)
        .then((data) => {
            console.log('response data: ' + data);
            updateElement(data, 0);
        })
        .catch(err => {
            console.log('error: ' + err);
            // set Error Snack bar notification
            updateElement('', 1);
        });
}

function updateElement(data, err) {
    console.log('data: ' + data);
    let populateSnackBar = document.getElementById("createListSnackbar");
    let populationString = '';
    if(err === 1){
        populationString += `<h2 style="background-color: #b30000">Failed To Create List!</h2>`;
        populateSnackBar.innerHTML = populationString;
    } else {
        populationString += `<h2 style="background-color: #00ff80">List ${data.list_name} created successfully!</h2>`;
        populateSnackBar.innerHTML = populationString;
    }
}