

//The creates automatic image slider in the index page
// set the first picture
let slideIndex = 1;
// this displays the first image
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex +=n);
}

function showDivs(n) {
    let i;
    let pictureGrab = document.getElementsByClassName("slider");
    if (n > pictureGrab.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = pictureGrab.length;
    }

    for (i = 0; i < pictureGrab.length; i++) {
        pictureGrab[i].style.display = "none";
    }

    pictureGrab[slideIndex - 1].style.display = "block";
}

//This makes it automatic
   window.addEventListener("load", function() {
       showDivs(slideIndex);
       setInterval(function() {plusDivs(1)}, 4000);
   });



//   This is for getting the weather information through api

const weatherURL = 'https://api.openweathermap.org/data/2.5/weather?id=3530103&APPID=418c04c2294318c72bd18980b93964a7';

fetch(weatherURL)
.then((response) => response.json())
.then((jsObject) => {

    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
    const desc = jsObject.weather[0].description;
    document.getElementById("cWeatherImage").setAttribute("src", imagesrc);
    document.getElementById("cWeatherImage").setAttribute("alt", desc);

    document.getElementById("getDay").textContent = arrayOfday[new Date().getDay()];
    document.getElementById("Location").textContent = jsObject.name;
    document.getElementById("cTemp").innerHTML = ((jsObject.main.temp - 273.15) * (9 / 5) + 32).toFixed(1) + " &deg;F";
    document.getElementById("cDescrip").textContent = jsObject.weather[0].description;
    document.getElementById("humidity").textContent = jsObject.main.humidity + "%";
    
});



//This is for the 5 day forcast

let date = new Date();
let arrayOfday = ["Sunday","Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
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


const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=3530103&APPID=418c04c2294318c72bd18980b93964a7';

fetch(forecastURL)
    .then((response) => response.json())
    .then((jsObject3) => {

        //console.table(jsObject3);
        //console.log(jsObject3);

        const forecast = jsObject3['list'];

        for(let i = 2; i < forecast.length; i+=8) {
             const imagesrc = 'https://openweathermap.org/img/w/' + forecast[i].weather[0].icon + '.png';
             const desc = forecast[i].weather[0].description;
             const temp = (forecast[i].main.temp - 273.15) * (9 / 5) + 32;

             document.getElementById(`forecast${i}`).innerHTML = temp.toFixed(1) + " &deg;F";
             document.getElementById(`imgforecast${i}`).setAttribute('src', imagesrc);
             document.getElementById(`imgforecast${i}`).setAttribute('alt', desc);
        }

    });


    // This is for the rental options cards

const rentalOptions = 'https://okaform.github.io/lesson13/data/rentaloptions.json';
fetch(rentalOptions)
.then((response) => response.json())
.then((jsObject2) => {
    // console.log(jsObject2);

    const rentalType = jsObject2['rental-type'];

    for (let i = 0; i < rentalType.length; i++) {
        let card = document.createElement('section');
        let h3 = document.createElement('h3');
        let img = document.createElement('img');
        let maxPersons = document.createElement('p');
        let walkInPrice = document.createElement('p');
        let reservePrice = document.createElement('p');
        // let reserveLink = document.createElement('a');

        h3.textContent = rentalType[i].name;
        img.setAttribute('src', "images/" + rentalType[i].photo);
        img.setAttribute('alt', rentalType[i].name + "image");
        maxPersons.textContent = "Max. Persons: " + rentalType[i].maxPersons;
        walkInPrice.textContent = "Walk-in Price From: " + rentalType[i].walkIn[0].halfDay;
        reservePrice.textContent = "Reservation price From: " +rentalType[i].Reservation[0].halfDay;
        
        // reserveLink.setAttribute('href', "reservation.html");

        card.appendChild(h3);
        card.appendChild(img);
        card.appendChild(maxPersons);
        card.appendChild(walkInPrice);
        card.appendChild(reservePrice);
        // card.appendChild(reserveLink);

        document.querySelector('div.cards').appendChild(card);


    }
});



    //functions that change to celsuis and farenheit on the forcast table.

    // function changetoF() {

    // }

    // function changetoC() {

    // }
