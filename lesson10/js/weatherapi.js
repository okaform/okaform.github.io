const apiURL = 'http://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=418c04c2294318c72bd18980b93964a7';

fetch(apiURL) 
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        console.table(jsObject);

        document.getElementById('current-temp').textContent = (jsObject.main.temp - 273.15) * (9 / 5) + 32;

        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
        const desc = jsObject.weather[0].description;  // note how we reference the weather array
        document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
        document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
        document.getElementById('icon').setAttribute('alt', desc);
    });