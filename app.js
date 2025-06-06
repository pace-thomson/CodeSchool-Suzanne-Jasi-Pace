const memes_urls = [
    {
        image_url: "https://media.makeameme.org/created/finally-sunny-weather.jpg",
        weather_type: "Sunny",
        //temp_range: [50, 75]
    },
]


const responseP = document.getElementById('response');

let resp = "";

async function fetchWeatherData() {

    const response = await fetch("https://api.weather.gov/gridpoints/SLC/21,19/forecast");

    const jsoned = await response.json();
    console.log(jsoned);
    const firstPeriod = jsoned.properties.periods[0];
    const secondPeriod = jsoned.properties.periods[1];

    console.log("first", firstPeriod);
    console.log('second', secondPeriod);
    let city = "St George";
    let state = "Utah";

    const citything = document.getElementById('location');
    citything.innerHTML = `${city}, ${state}`;

    const shortForecast = document.getElementById('shortForecast');
    shortForecast.innerHTML = firstPeriod.shortForecast;

    const forecastIcon = document.getElementById('forecastIcon');
    forecastIcon.src = firstPeriod.icon;

    const temp = document.getElementById('temp');
    temp.innerHTML = firstPeriod.temperature;

    const memeImage = document.getElementById('memeImage');
    memeImage.src = memes_urls[0].image_url;
}


fetchWeatherData();
    

