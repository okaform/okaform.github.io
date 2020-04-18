let day = new Date();

const getMonth = day.getMonth() + 1;
let getDay = day.getDate();
let getYear = day.getFullYear();

let getHour = day.getHours();
let getMinutes = day.getMinutes();
let getSeconds = day.getSeconds();

let fullDate = getMonth + "/" +getDay + "/" +getYear +  " " +getHour + ":" +getMinutes + ":" +getSeconds;
console.log(fullDate);


document.getElementById('currentDate').innerHTML = fullDate;

document.getElementById('currentYear').innerHTML = getYear;
