const API_KEY = config.apikey;
function onGeoSuccess (position){
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weatherContainer = document.querySelector("#weather");
      const weather = weatherContainer.querySelector("span:first-of-type");
      const city = weatherContainer.querySelector("span:last-child");
      const weatherImg = weatherContainer.querySelector("img");
      const icon = data.weather[0].icon;
      const temp = Math.round(data.main.temp * 10) / 10;
      weatherImg.src =  `img/icons/${icon}.png`;
      weather.innerText = `${temp}˚C`;
      city.innerText = data.name;
    });
};
function onGeoError (){
  alert('현재 위치를 찾을 수 없습니다.');
};
navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);