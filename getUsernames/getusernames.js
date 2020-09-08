


function getUsernames() {

    let threshold = 10;
    //get the url
    const url = 'https://jsonmock.hackerrank.com/api/article_users?page=<pageNumber>';

    fetch(url)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject)



    });




}