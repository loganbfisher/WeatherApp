import axios from 'axios';

const API_KEY = "fd164944bfe4636a98d2ded48e93821f";

export const getWeatherForLocation = (latitude, longitude) => {
  return getLocation()
    .then((position) => {
      return axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${API_KEY}`);
    });
}

export const getLocation = () => {
  return new Promise((resolve, reject) => {
    const posPass = (position) => {
      resolve(position);
    };

    const posFail = (positionError) => {
      reject(positionError);
      console.log(positionError);
      prompt("allow site to gather your location information or enter it manually please");
    };

    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(posPass, posFail);
    }
  });
}
