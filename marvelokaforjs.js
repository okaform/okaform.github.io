let day = new Date();
let getYear = day.getFullYear();
let lastModified = document.lastModified;


document.getElementById('modifiedDate').innerHTML = lastModified;
document.getElementById('currentYear').innerHTML = getYear;
