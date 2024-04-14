var map = L.map("map").setView([14.5845374, 121.1752151], 19);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

let marker, circle;

setInterval(() => {
  let isSending = window.sendingLoc;
  let riderID = window.riderID;

  if (riderID != undefined && isSending == "ok") {
    map.invalidateSize(true);

    if (marker) {
      map.removeLayer(marker);
      map.removeLayer(circle);
    }

    marker = L.marker([window.lat, window.long]).addTo(map);
    circle = L.circle([window.lat, window.long], { radius: 30 }).addTo(map);
    map.fitBounds(circle.getBounds());
  } else {
    if (marker) {
      map.removeLayer(marker);
      map.removeLayer(circle);
    }
  }
}, 1000);
