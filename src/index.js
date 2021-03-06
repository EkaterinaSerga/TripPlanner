const mapboxgl= require('mapbox-gl');

const markerCreator = require('./marker');
mapboxgl.accessToken = 'pk.eyJ1Ijoia2F0eWFzZXJnYSIsImEiOiJjazlzcHJibzYxN3RpM2dycjN6Y2w1azBuIn0.KMLUdY8JN9wSanElJHVwSQ';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});


let marker = markerCreator('restaurant', [-73.997726, 40.731229]);
marker.addTo(map);













// new mapboxgl.Market(document.querySelector('#marker')).setLngLat([-74.009151, 40.705086]).addTo(map);

// const markerDomEl = document.createElement("div");
// markerDomEl.style.width = "32px";
// markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
// new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);
