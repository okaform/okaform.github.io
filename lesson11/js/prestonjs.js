

let arrayOfday = ["Sunday","Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let arrayOfMonth = ["January","February","March", "April", "May", "June", "July",
                        "August","September","October", "November", "December"];


let date = new Date();
let fullYear = date.getFullYear();
let date2 = date.getDate();
let day = arrayOfday[date.getDay()];
let month = arrayOfMonth[date.getMonth()];


document.getElementById("currentDate").innerHTML = day + ", " + date2 + " " + month + " " + fullYear + "."; 


function toggleMenu() {
    let y = document.getElementById("primaryNav").classList.toggle("hide");
    let c = document.getElementById("changeSymbol").innerHTML = "&#935; Menu";

    if (y == true) {
     c = document.getElementById("changeSymbol").innerHTML = "&#9776; Menu";
    }

}



let aside = document.getElementById("top-popup");
let getFriday = date.getDay();


if (getFriday == 5) {
    aside.style.display = "block";
}



