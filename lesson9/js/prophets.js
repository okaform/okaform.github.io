const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })

    .then(function (jsonObject) {
        console.table(jsonObject);

    const prophets = jsonObject['prophets'];
    console.table(prophets);
    for (let i = 0; i < prophets.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let birthDate = document.createElement('p');
        let birthPlace = document.createElement('p');
        let prophetsImg = document.createElement('img');

        h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
        birthDate.textContent = "Date of Birth: " + prophets[i].birthdate;
        birthPlace.textContent = "Place of Birth: " + prophets[i].birthplace;
        prophetsImg.setAttribute('src', prophets[i].imageurl);
        prophetsImg.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname + " - " + prophets[i].order);

        card.appendChild(h2);
        card.appendChild(birthDate);
        card.appendChild(birthPlace);
        card.appendChild(prophetsImg);

        document.querySelector('div.cards').appendChild(card);
    }
    })

