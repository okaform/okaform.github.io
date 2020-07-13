
// This function toggles the menu 
function toggleMenu() {
    let y = document.getElementById("primaryNav").classList.toggle("hide");
    let c = document.getElementById("changeSymbol").innerHTML = "&#935;";

    if (y == true) {
     c = document.getElementById("changeSymbol").innerHTML = "&#9776;";
    }

}




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

    // console.log(jsObject);
    // console.table(jsObject);

    //document.getElementById("Location").textContent = jsObject.name;
    document.getElementById("cTemp").innerHTML = ((jsObject.main.temp - 273.15) * (9 / 5) + 32).toFixed(1) + " &deg;F";
    document.getElementById("cDescrip").textContent = jsObject.weather[0].description;
    document.getElementById("humidity").textContent = jsObject.main.humidity + "%";
});


// This is for the rental options cards

const rentalOptions = 'https://okaform.github.io/lesson13/data/rentaloptions.json';
fetch(rentalOptions)
.then((response) => response.json())
.then((jsObject2) => {
    console.log(jsObject2);

    const rentalType = jsObject2['rental-type'];

    for (let i = 0; i < rentalType.length; i++) {
        let card = document.createElement('section');
        let h3 = document.createElement('h3');
        let img = document.createElement('img');
        let maxPersons = document.createElement('p');
        let walkInPrice = document.createElement('p');
        let reservePrice = document.createElement('p');
        let reserveLink = document.createElement('a');

        h3.textContent = rentalType[i].name;
        img.setAttribute('src', "images/" + rentalType[i].photo);
        img.setAttribute('alt', rentalType[i].name);
        maxPersons.textContent = "Max. Persons: " + rentalType[i].maxPersons;
        walkInPrice.textContent = "From: " + rentalType[i].walkIn[0].halfDay;

    }
});
