async function getHelperLists(url = '') {
    const response = await fetch(url, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return await response.json();
}

function getHelperListsWithId(userId) {
    console.log('userId: ' + userId);
    queryString = `http://localhost:3000/users/${userId}/helper_lists/`;
    console.log('queryString: ' + queryString);
    getHelperLists(queryString)
        .then((data) => {
            console.log('response data: ' + data);
            //updateElement(data);
            return data;
        });
}

module.exports = {
    getHelperListsWithId
}