// This is for the rental options cards

const rentalOptions = 'https://okaform.github.io/lesson13/data/rentaloptions.json';
fetch(rentalOptions)
.then((response) => response.json())
.then((jsObject2) => {


    const rentalType = jsObject2['rental-type'];

    for (let i = 0; i < rentalType.length; i++) {
        let card = document.createElement('section');
        let h3 = document.createElement('h3');
        let img = document.createElement('img');
        let maxPersons = document.createElement('p');

        //create the table and it's element
        let table = document.createElement('table');
        let tbody = document.createElement('tbody');
        let tRow1 = document.createElement('tr');
        let tRow2 = document.createElement('tr');
        let tRow3 = document.createElement('tr');

        //create table content
        let tEmpty = document.createElement('th');
        let tHead1 = document.createElement('th');
        let tHead2 = document.createElement('th');

        //for the walk in price
        let tData1 = document.createElement('td');
        let walkInPriceHalfDay = document.createElement('td');
        let walkInPriceFullDay = document.createElement('td');

        //for the reservation price
        let tData2 = document.createElement('td');
        let reservePriceHalfDay = document.createElement('td');
        let reservePriceFullDay = document.createElement('td');
        let reserveLink = document.createElement('a');


        h3.textContent = rentalType[i].name;
        img.setAttribute('src', "images/" + rentalType[i].photo);
        img.setAttribute('alt', rentalType[i].name + "image");
        maxPersons.textContent = "Max. Persons: " + rentalType[i].maxPersons;

        //The actual Content
        tEmpty.textContent = '';
        tHead1.textContent = 'Half Day (3hrs)';
        tHead2.textContent = 'Full Day';

        tData1.textContent = 'Walk-in Price';
        tData2.textContent = 'Reservation Price'


        walkInPriceHalfDay.textContent = rentalType[i].walkIn[0].halfDay;
        walkInPriceFullDay.textContent = rentalType[i].walkIn[0].fullDay;

        reservePriceHalfDay.textContent = rentalType[i].Reservation[0].halfDay;
        reservePriceFullDay.textContent = rentalType[i].Reservation[0].fullDay;
        reserveLink.textContent = "Reserve Now";
        reserveLink.setAttribute('href', "reservation.html");


        tRow1.appendChild(tEmpty);
        tRow1.appendChild(tHead1);
        tRow1.appendChild(tHead2);

        tRow2.appendChild(tData1);
        tRow2.appendChild(walkInPriceHalfDay);
        tRow2.appendChild(walkInPriceFullDay);

        tRow3.appendChild(tData2);
        tRow3.appendChild(reservePriceHalfDay);
        tRow3.appendChild(reservePriceFullDay);

        tbody.appendChild(tRow1);
        tbody.appendChild(tRow2);
        tbody.appendChild(tRow3);

        table.appendChild(tbody);


        card.appendChild(h3);
        card.appendChild(img);
        card.appendChild(maxPersons);
        card.appendChild(table);
        card.appendChild(reserveLink);

        document.querySelector('div.cards').appendChild(card);


    }
});


