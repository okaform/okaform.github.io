//select the form
const formElement = document.forms[0];


let date2 = new Date();
let year = date2.getFullYear();
let month = ('0' + (date2.getMonth()+1)).slice(-2);
let day = date2.getDate();

let fullDate = year + "-" + month + "-" + day;

let dateControl = document.querySelector('input[name="pickupdate"]');
let maxDateControl = document.querySelector('input[name="dropoffdate"]');


maxDateControl.min = dateControl.value;
dateControl.value = fullDate;
dateControl.min = fullDate;
maxDateControl.min = dateControl.value;


function adjustDate() {
    maxDateControl.min = dateControl.value;
    if (dateControl.value > maxDateControl.value) {
        maxDateControl.value = dateControl.value;
    }
    let startDate = new Date(dateControl.value);
    let endDate = new Date(maxDateControl.value);

    let diffInTime = endDate.getTime() - startDate.getTime();

    let diffInDays = diffInTime / (1000 * 3600 * 24);

    document.getElementById("period").textContent = diffInDays;

}


// For accordion
let drp = document.getElementsByClassName("rentBtn");
let i;
for (i = 0; i < drp.length; i++) {
  drp[i].addEventListener("click", function() {
    this.classList.toggle("after");
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    }
    else {
      panel.style.display = "block";
    }
  });
}

