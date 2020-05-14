
let arrayOfday = ["Sunday","Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let arrayOfMonth = ["January","February","March", "April", "May", "June", "July",
                        "August","September","October", "November", "December"];


let date = new Date();
let fullYear = date.getFullYear();
let date2 = date.getDate();


    let day;
    for (let i = 0; i < arrayOfday.length; i++) {
            if (i == date.getDay()) {
                day = arrayOfday[i];
                break;
            }
    }

    let month;
    for (let i = 0; i < arrayOfMonth.length; i++) {
        if (date.getMonth() == i) {
            month = arrayOfMonth[i];
            break;
        }
}

document.getElementById("currentDate").innerHTML = day + ", " + date2 + " " + month + " " + fullYear + "."; 


function toggleMenu() {
    let y = document.getElementById("primaryNav").classList.toggle("hide");
    let c = document.getElementById("changeSymbol").innerHTML = "&#935; Menu";

    if (y == true) {
     c = document.getElementById("changeSymbol").innerHTML = "&#9776; Menu";
    }

}