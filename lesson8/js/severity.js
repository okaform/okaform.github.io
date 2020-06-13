
function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}




function getInfo() {
    let fullname = document.getElementById("fullnames").value;

    let email = document.getElementById("emails").value;

    let tel = document.getElementById("tels").value;

    let caseNumber = Math.floor(Math.random() * 999999);

}


function useInfo(fullname, email, tel, caseNumber) {
    
    document.getElementById("getName").innerText = fullname;

    document.getElementById("getEmail").innerText = email;

    document.getElementById("getTel").innerText = tel;

    document.getElementById("getCaseNumber").innerText = caseNumber;
}





