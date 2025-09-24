

const apiKey = "a82d9a9273ca19696d82c2f01aeec19d"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == 'clouds') {
        weatherIcon.scr = "img/clouds.png"
    }
    else if (data.weather[0].main == 'Clear') {
        weatherIcon.scr = "img/clear.png"
    }
    else if (data.weather[0].main == 'Rain') {
        weatherIcon.scr = "img/rain.png"
    }
    else if (data.weather[0].main == 'Drizzle') {
        weatherIcon.scr = "img/drizzle.png"
    }
    else if (data.weather[0].main == 'Mist') {
        weatherIcon.scr = "img/mist.png"
    }


}
searchbtn.addEventListener('click', function () {
    checkWeather(searchbox.value);
})
checkWeather("London");