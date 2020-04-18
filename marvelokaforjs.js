let day = new Date();
let getYear = day.getFullYear();
let lastModified = document.lastModified;


document.getElementById('currentDate').innerHTML = lastModified;
document.getElementById('currentYear').innerHTML = getYear;
