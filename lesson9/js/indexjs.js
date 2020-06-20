
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
        let article = document.createElement('article');
        let h2 = document.createElement('h2');
        let yearFounded = document.createElement('p');
        let population = document.createElement('p');
        let annualRainFall = document.createElement('p');
        let motto = document.createElement('p');
        let photo = document.createElement('img');

        let count = 0;
                 if ((i == 1) || (i == 4) || (i == 5)) {
 
                        h2.textContent = towns[i].name;
                        motto.textContent = towns[i].motto; 
                        yearFounded.textContent = "Year Founded: " + towns[i].yearFounded;
                        population.textContent = "Population: " + towns[i].currentPopulation;               
                        annualRainFall.textContent = "Annual Rain Fall: " + towns[i].averageRainfall;
                        photo.setAttribute('src', "images/" + towns[i].photo);
                        photo.setAttribute('alt', towns[i].name + " Photo");
                        
                        article.appendChild(h2);
                        article.appendChild(motto);
                        article.appendChild(yearFounded);
                        article.appendChild(population);
                        article.appendChild(annualRainFall);
                        card.appendChild(article);
                        card.appendChild(photo);
                        
                        
                        document.querySelector('div.cards').appendChild(card);
                       
                     
                 }
    }
    })

