
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })

    .then(function (jsonObject) {
        console.table(jsonObject);

    const towns = jsonObject['towns'];
    console.table(towns);
    for (let i = 0; i < towns.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let yearFounded = document.createElement('p');
        let population = document.createElement('p');
        let annualRainFall = document.createElement('p');
        let motto = document.createElement('p');
        let photo = document.createElement('img');

                 if ((i == 4) || (i == 1) || (i == 5)) {
                     if ((i == 4)) {
                         i = 1;
                     
                        h2.textContent = towns[i].name;
                        motto.textContent = towns[i].motto; 
                        yearFounded.textContent = "Year Founded: " + towns[i].yearFounded;
                        population.textContent = "Population: " + towns[i].currentPopulation;               
                        annualRainFall.textContent = "Annual Rain Fall: " + towns[i].averageRainfall;
                        photo.setAttribute('src', towns[i].photo);
                        
                        card.appendChild(h2);
                        card.appendChild(motto);
                        card.appendChild(yearFounded);
                        card.appendChild(population);
                        card.appendChild(annualRainFall);
                        card.appendChild(photo);
                        
                        document.querySelector('div.cards').appendChild(card);
                     }
                 }
    }
    })

