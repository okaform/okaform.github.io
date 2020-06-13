
function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}




function getInfo() {
    localStorage.fullname = document.getElementById("fullnames").value;

    localStorage.email = document.getElementById("emails").value;

    localStorage.tel = document.getElementById("tels").value;

    localStorage.caseNumber = Math.floor(Math.random() * 999999);

}


function useInfo() {
    
    document.getElementById("getName").innerText = localStorage.fullname;

    document.getElementById("getEmail").innerText = localStorage.email;

    document.getElementById("getTel").innerText = localStorage.tel;

    document.getElementById("getCaseNumber").innerText = localStorage.caseNumber;
}





