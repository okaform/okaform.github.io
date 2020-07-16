//select the form
const formElement = document.forms[0];


let date = new Date();
let year = date.getFullYear();
let month = ('0' + (date.getMonth()+1)).slice(-2);
let day = date.getDate();

let fullDate = year + "-" + month + "-" + day;

let dateControl = document.querySelector('input[name="pickupdate"]');
let maxDateControl = document.querySelector('input[name="dropoffdate"]');

maxDateControl.min = dateControl.value;
dateControl.value = fullDate;
dateControl.min = fullDate;
maxDateControl.min = dateControl.value;

function adjustDate() {
    maxDateControl.min = dateControl.value;
}



