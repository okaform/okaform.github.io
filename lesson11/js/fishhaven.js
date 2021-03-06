// This is for the weather summary
const weatherURL = 'https://api.openweathermap.org/data/2.5/weather?lat=42.037167&lon=-111.396&APPID=418c04c2294318c72bd18980b93964a7';

fetch(weatherURL) 
    .then((response) => response.json())
    .then((jsObject) => {
        
        let highTemp = ((jsObject.main.temp_max - 273.15) * (9 / 5) + 32).toFixed(1);
        let windSpeed = jsObject.wind.speed;

        document.getElementById("currently").textContent = jsObject.weather[0].description;
        document.getElementById("high").innerHTML = highTemp + " &deg;F";
        document.getElementById("humidity").textContent = jsObject.main.humidity + "%";
        document.getElementById("windSpeed").textContent = windSpeed + " mph";
       

        //perform an if statement to make sure the high temperature  is greater than or equal to 50 F
        //and the windspeed is above 5mph
        if (highTemp <= 50 && windSpeed > 3){
            let s = Math.pow(windSpeed, 0.16);
            let getWindChill = Math.round((35.74) + (0.6215 * highTemp) - (35.75 * s) + (0.4275 * highTemp * s));
            document.getElementById("windChill").innerHTML = getWindChill + " &deg;F";
        } 
        else {
            document.getElementById("windChill").innerHTML = "N/A";
        }

    });

// This is for the 5 day forecast
    const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=42.037167&lon=-111.396&APPID=418c04c2294318c72bd18980b93964a7';

    fetch(forecastURL)
        .then((response) => response.json())
        .then((jsObject) => {
            const forecast = jsObject['list'];

            for(let i = 5; i < forecast.length; i+=8) {
                const imagesrc = 'https://openweathermap.org/img/w/' + forecast[i].weather[0].icon + '.png';
                const desc = forecast[i].weather[0].description;
                const temp = (forecast[i].main.temp - 273.15) * (9 / 5) + 32;

                document.getElementById(`forecast${i}`).innerHTML = temp.toFixed(1) + " &deg;F";
                document.getElementById(`imgforecast${i}`).setAttribute('src', imagesrc);
                document.getElementById(`imgforecast${i}`).setAttribute('alt', desc);
            }

        });

        // This is for the upcoming events

        const eventsURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

        fetch(eventsURL)
            .then((response) => response.json())
            .then((jsObject) => {

                for (let i = 0; i < jsObject.towns[1].events.length; i++) {

                    let eventsHeader = document.createElement('h4');
                    let eventsParagraph = document.createElement('p');
                    eventsHeader.textContent = jsObject.towns[1].events[i].split(":", 2)[0];
                    eventsParagraph.textContent = jsObject.towns[1].events[i].split(":", 2)[1];


                    document.querySelector('div.upcoming').appendChild(eventsHeader);
                    document.querySelector('div.upcoming').appendChild(eventsParagraph);
                }



            })

    