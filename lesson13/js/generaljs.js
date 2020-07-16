

// This function toggles the menu 
function toggleMenu() {
    let y = document.getElementById("primaryNav").classList.toggle("hide");
    document.getElementById("navContainer").style.width = "100%";


   let c = document.getElementById("changeSymbol").innerHTML = "&#935;";

   if (y == true) {
    c = document.getElementById("changeSymbol").innerHTML = "&#9776;";
    document.getElementById("navContainer").style.width = "0";
   }

}


// This is for the last updated document
document.getElementById("lastUpdated").innerHTML = document.lastModified;