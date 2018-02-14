'use strict';

var weatherconditions = new XMLHttpRequest();
var weatherforcast = new XMLHttpRequest();
var cObj;
var fObj;

function loadweather() {
    var zip=document.getElementById.('zip').value;
    if(zip === '') {zip="91731"}
    var conditionspath="http://api.wunderground.com/api/c5af6848a6010479/conditions/q/"+zip+".json";
    var forecastpath="http://api.wunderground.com/api/c5af6848a6010479/forecast/q/"+zip+".json"
    // GET THE CONDITION
weatherconditions.open('GET','',true);
weatherconditions.responseType='text';
weatherconditions.send(null);
    
    // GET THE FORECAST
weatherforcast.open('GET','',true);
weatherforcast.responseType='text';
weatherforcast.send(null);
}

weatherconditions.onload = function() {
    if(weatherconditions.status === 200)
        {
            cObj = JSON.parse(weatherconditions.responseText);
            console.log(cObj);
            document.getElementById('location').innerHTML=cObj.current_observation.display_location.full;
            document.getElementById('weather').innerHTML=cObj.current_observation.weather;
            document.getElementById('temperature').innerHTML=cObj.current_observation.temp_f;
            
        }
}


weatherforcast.onload = function() {
    if(weatherforcast.status === 200)
        {
            fObj = JSON.parse(weatherforcast.responseText);
            console.log(fObj);
            document.getElementById('desc').innerHTML=fObj.forecast.txt_forecast.forcastday[0].fcttxt;
            // day1
             document.getElementById('r1c1').innerHTML=fObj.forecast.txt_forecast.forcastday[1].date.weekday;
             document.getElementById('r1c3').innerHTML=fObj.forecast.txt_forecast.forcastday[1].high.fahrenheit;
             document.getElementById('r1c4').innerHTML=fObj.forecast.txt_forecast.forcastday[1].low.fahrenheit;
             var imagepath = fObj.forecast.simpleforecasst.forecastday[1].icon_url;
             document.getElementById('r1c2').src=imagepath;
            
            //day 2
             document.getElementById('r2c1').innerHTML=fObj.forecast.txt_forecast.forcastday[2].date.weekday;
             document.getElementById('r2c3').innerHTML=fObj.forecast.txt_forecast.forcastday[2].high.fahrenheit;
             document.getElementById('r2c4').innerHTML=fObj.forecast.txt_forecast.forcastday[2].low.fahrenheit;
             var imagepath = fObj.forecast.simpleforecasst.forecastday[2].icon_url;
             document.getElementById('r2c2').src=imagepath;
            
             //day 3
             document.getElementById('r3c1').innerHTML=fObj.forecast.txt_forecast.forcastday[3].date.weekday;
             document.getElementById('r3c3').innerHTML=fObj.forecast.txt_forecast.forcastday[3].high.fahrenheit;
             document.getElementById('r3c4').innerHTML=fObj.forecast.txt_forecast.forcastday[3].low.fahrenheit;
             var imagepath = fObj.forecast.simpleforecasst.forecastday[3].icon_url;
             document.getElementById('r3c2').src=imagepath;
            
        }
};