//Five Day Forecast

//create an array to store the days and future days
let arrayOfDayEstimate = [date.getDay() + 1, date.getDay() + 2, date.getDay() + 3, date.getDay() + 4, date.getDay() + 5];
    
let remainder;
//create a loop with an if statement that gets 5 days in advance.
for (let i = 0; i < arrayOfDayEstimate.length; i++) {
    remainder = arrayOfDayEstimate[i] % 7;
        if (remainder == 0) {
            arrayOfDayEstimate[i] = 0;
        }
        else if (remainder == 1) {
            arrayOfDayEstimate[i] = 1;
        }
        else if (remainder == 2) {
            arrayOfDayEstimate[i] = 2;
        }
        else if (remainder == 3) {
            arrayOfDayEstimate[i] = 3;
        }
        else if (remainder == 4) {
            arrayOfDayEstimate[i] = 4;
        }
        else if (remainder == 5) {
            arrayOfDayEstimate[i] = 5;
        }
        else {
            arrayOfDayEstimate[i] = 6;
        }

    }

let day1 = document.getElementById("day1").innerHTML = arrayOfday[arrayOfDayEstimate[0]];
let day2 = document.getElementById("day2").innerHTML = arrayOfday[arrayOfDayEstimate[1]];
let day3 = document.getElementById("day3").innerHTML = arrayOfday[arrayOfDayEstimate[2]];
let day4 = document.getElementById("day4").innerHTML = arrayOfday[arrayOfDayEstimate[3]];
let day5 = document.getElementById("day5").innerHTML = arrayOfday[arrayOfDayEstimate[4]];