

// http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=57bd3be69d4615dc340d90983a4f5998
// http://api.openweathermap.org/data/2.5/forecast?q=London&appid=57bd3be69d4615dc340d90983a4f5998




// fetch("http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=57bd3be69d4615dc340d90983a4f5998")
// .then(response=>response.json())
// .then(data=>console.log(data.list[0].main))
// .catch(err=>console.error(err));


let cityname=document.getElementById("city-name")
let weathertype=document.getElementById("weather-type")
let temp=document.getElementById("temp")
let mintemp=document.getElementById("min-temp")
let maxtemp=document.getElementById("max-temp")
// API_KEY for maps api
let API_KEY = "57bd3be69d4615dc340d90983a4f5998";

const getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
  const weatherPromise  = fetch(FULL_URL);
  return weatherPromise.then((response) => {
    return response.json();
  })
}


const searchCity = () => {
  const city = document.getElementById('city-input').value;
  getWeatherData(city)
  .then((res)=>{
    showWeatherData(res);
  }).catch((error)=>{
    console.log(error);
    console.log("Something happend");
  })
}


showWeatherData = (weatherData) => {
  document.getElementById("city-name").innerText = weatherData.name;
  document.getElementById("weather-type").innerText = weatherData.weather[0].main;
  document.getElementById("temp").innerText = weatherData.main.temp;
  document.getElementById("min-temp").innerText = weatherData.main.temp_min;
  document.getElementById("max-temp").innerText = weatherData.main.temp_max;
}

