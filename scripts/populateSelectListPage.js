

window.addEventListener('load', function load(event) {
    getHelperListsWithId();
});

async function getHelperLists(url = '') {
    const response = await fetch(url, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return await response.json();
}

function getHelperListsWithId() {
    let loggedInUser = JSON.parse(sessionStorage.getItem(`LoggedInUser`));
    console.log('1 loggedInUser.id: ' + loggedInUser.id);
    queryString = `http://localhost:3000/users/${loggedInUser.id}/helper_lists/`;
    console.log('queryString: ' + queryString);
    getHelperLists(queryString)
        .then((data) => {
            console.log('response data: ' + data);
            updateElement(data);
        });
}

function updateElement(data) {
    console.log('3 data: ' + data.helper_lists);
    let populateDiv = document.getElementById("populateSelectList");
    let populationString = '';
    // Create the html of the page
    if(data.helper_lists.length === 1){
        window.location.href = './listExample.html';
    }else {
        for (helper_list of data.helper_lists) {
            console.log('individual helper list: ' + helper_list);
            populationString += `
            <div>
                <a href="../html/listExample.html">${helper_list.list_name}</a><br><br>
                <script src="../scripts/editList.js" charset="utf-8"></script>
            </div>
            `
        }
        populateDiv.innerHTML = populationString;
    }
}