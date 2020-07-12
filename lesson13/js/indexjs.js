
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
//  window.addEventListener("load", function() {
//      showDivs(slideIndex);
//      setInterval(function() {plusDivs(1)}, 4000);
//  });