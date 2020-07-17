function getInfo() {
    localStorage.fullname = document.getElementById("fullnames").value;

    localStorage.email = document.getElementById("emails").value;

    localStorage.tel = document.getElementById("tels").value;

    localStorage.caseNumber = Math.floor(Math.random() * 999999);

    localStorage.pickUpDate = document.querySelector('input[name="pickupdate"]').value;

    localStorage.dropOffDate = document.querySelector('input[name="dropoffdate"]').value;

    localStorage.rentalType = document.querySelector('select[name="towns"]').value;
}

function useInfo() {
    document.getElementById("getName").innerText = localStorage.fullname;

    document.getElementById("getEmail").innerText = localStorage.email;

    document.getElementById("getTel").innerText = localStorage.tel;

    document.getElementById("getCaseNumber").innerText = localStorage.caseNumber;

    document.getElementById("pickUpDate").innerText = localStorage.pickUpDate;

    document.getElementById("dropOffDate").innerText =  localStorage.dropOffDate;

    document.getElementById("rentalType").innerText = localStorage.rentalType;
    

}