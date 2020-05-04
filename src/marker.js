const mapboxgl= require('mapbox-gl');

function markerCreator(activityType, place) {
  if (activityType === 'hotel') {
    console.log('this is the hotel');
    console.log(activityType);
    const markerDomEl = document.createElement("div");
    markerDomEl.style.width = "32px";
    markerDomEl.style.height = "39px";
    markerDomEl.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";
    const newMarker = new mapboxgl.Marker(markerDomEl).setLngLat(place);
    return newMarker;
  }

  else if (activityType === 'restaurant') {
    const markerDomEl = document.createElement("div");
    markerDomEl.style.width = "32px";
    markerDomEl.style.height = "39px";
    markerDomEl.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";
    return new mapboxgl.Marker(markerDomEl).setLngLat(place);
  }

  else if (activityType === 'activity') {
    const markerDomEl = document.createElement("div");
    markerDomEl.style.width = "32px";
    markerDomEl.style.height = "39px";
    markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
    const newMarker = new mapboxgl.Marker(markerDomEl).setLngLat(place);
    return newMarker;
  }
};

module.exports = markerCreator;



