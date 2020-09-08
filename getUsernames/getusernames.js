let threshold = 1000;


function getUsernames(threshold) {

    //use the url to get the total number of pages to use in a loop
    const urlPage = 'https://jsonmock.hackerrank.com/api/article_users?page';
    fetch(urlPage)
    .then((response) => response.json())
    .then((jsObject) => {
        let total = jsObject.total;
       // console.log(total);


       //get the url
        const url = 'https://jsonmock.hackerrank.com/api/article_users?page=';     

       //run a for loop to get the info on all the pages
       for (let i = 1; i <= total; i++) {
        const url = 'https://jsonmock.hackerrank.com/api/article_users?page='+`${i}`;
        fetch(url)
        .then((response) => response.json())
        .then((jsObject2) => {
            //console.log(jsObject2.data);
            //access the submission count from the data's data
           for (let j = 0; j < jsObject2.data.length; j++) {
               let submission_count =  jsObject2.data[j].submission_count;
               //check if the submission count is greater than the threshold
                if (submission_count > 500) {
                   //let p = document.createElement('p');
                   //p.innerHTML = jsObject2.data[j].username;
                   //body.appendChild(p);
                   //document.getElementById("userNames").innerHTML = jsObject2.data[j].username;
                   console.log(jsObject2.data[j].username);
                }
                else {
                    continue;
                }
            }    
    
    
        });
       }

    });







}