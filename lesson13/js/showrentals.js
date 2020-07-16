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
        let reserveLink = document.createElement('a');

        h3.textContent = rentalType[i].name;
        img.setAttribute('src', "images/" + rentalType[i].photo);
        img.setAttribute('alt', rentalType[i].name + "image");
        maxPersons.textContent = "Max. Persons: " + rentalType[i].maxPersons;
        walkInPrice.textContent = "Walk-in Price From: " + rentalType[i].walkIn[0].halfDay;
        reservePrice.textContent = "Reservation price From: " +rentalType[i].Reservation[0].halfDay;
        reserveLink.textContent = "Reserve Now";
        reserveLink.setAttribute('href', "#");

        card.appendChild(h3);
        card.appendChild(img);
        card.appendChild(maxPersons);
        card.appendChild(walkInPrice);
        card.appendChild(reservePrice);
        card.appendChild(reserveLink);

        document.querySelector('div.cards').appendChild(card);


    }
});


