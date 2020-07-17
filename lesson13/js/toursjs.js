

// For accordion
let drp = document.getElementsByClassName("toursBtn");
let i;
for (i = 0; i < drp.length; i++) {
  drp[i].addEventListener("click", function() {
    
    let panel = this.nextElementSibling;
    if (panel.style.height === "initial") {
      panel.style.height = "0";
    }
    else {
      panel.style.height = "initial";
    }
  });
}

