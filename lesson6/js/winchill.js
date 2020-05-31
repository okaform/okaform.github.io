//Get value for the temperature
let highTemperature = parseFloat(document.getElementById('high'));

//Get value for the windspeed
let windSpeed = parseFloat(document.getElementById('windSpeed'));

//perform an if statement to make sure the high temperature  is greater than or equal to 50 F
//and the windspeed is above 5mph
if (highTemperature <= 50 && windSpeed > 3){
    let s = Math.pow(windSpeed, 0.16);
    let getWindChill = Math.round((35.74) + (0.6215 * highTemperature) - (35.75 * s) + (0.4275 * highTemperature * s));
    
    document.getElementById("windChill").innerHTML = getWindChill;
} else {
    document.getElementById("windChill").innerHTML = "N/A";
}
