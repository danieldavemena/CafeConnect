let long = 0;
let lat = 0;

function sendGps(position) {
  lat = position.coords.latitude;
  long = position.coords.longitude;
}

function error() {
  console.log("Locating...");
}

const options = {
  enableHighAccuracy: true,
  maximumAge: 1000,
  timeout: 10,
};

navigator.geolocation.watchPosition(sendGps, error, options);

export { long, lat };
