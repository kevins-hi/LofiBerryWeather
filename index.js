function weatherBalloon(cityID) {
    var key = 'a73533782e8c0c25b54a67e88ced663a';
    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID + '&appid=' + key)
    .then(function(resp) {return resp.json()})
    .then(function(data) {
        drawWeather(data);
    })
    .catch(function() {
    });
}
function drawWeather(d) {
    var celsius = Math.round(parseFloat(d.main.temp)-273.15);
    var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32);
    document.getElementById('description').innerHTML = d.weather[0].description;
    document.getElementById('temp').innerHTML = fahrenheit + '&deg;';
    document.getElementById('location').innerHTML = d.name;
}