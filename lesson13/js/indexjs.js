
// This function toggles the menu 
function toggleMenu() {
    let y = document.getElementById("primaryNav").classList.toggle("hide");
    let c = document.getElementById("changeSymbol").innerHTML = "&#935; Menu";

    if (y == true) {
     c = document.getElementById("changeSymbol").innerHTML = "&#9776; Menu";
    }

}
