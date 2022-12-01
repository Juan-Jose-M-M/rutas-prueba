//Configuracion del mapa
mapboxgl.accessToken =
  "pk.eyJ1IjoianVhbjEyMTEyMTIiLCJhIjoiY2xhenpvbjlrMWU3MTN2bjhzZ3JhbHNwNSJ9.AGQol8An8Lxg3B627nIG1A";
const map = new mapboxgl.Map({
  container: "map", // container ID
  // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
  style: "mapbox://styles/juan1211212/clazzxvs7001n14pky9cttmux", // style URL
  center: [-94.56421, 17.9923709],
  // starting position [lng, lat]
  zoom: 13, // starting zoom
});
/*
//Boton para poder saber la ubicacion en tiempo real
map.addControl(
  new mapboxgl.GeolocateControl({
    positionOptions: {
      enableHighAccuracy: true,
    },
    // When active the map will receive updates to the device's location as it changes.
    trackUserLocation: true,
    // Draw an arrow next to the location dot to indicate which direction the device is heading.
    showUserHeading: true,
  })
);
*/
// Initialize the GeolocateControl.
const geolocate = new mapboxgl.GeolocateControl({
  positionOptions: {
    enableHighAccuracy: true,
  },
  trackUserLocation: true,
});
// Add the control to the map.
map.addControl(geolocate);
// Set an event listener that fires
// when a trackuserlocationstart event occurs.
geolocate.on("trackuserlocationstart", () => {
  console.log("A trackuserlocationstart event has occurred.");
});

map.addControl(new mapboxgl.NavigationControl("top-lef"));

const coordinate = [-94.5729, 18.0143863];
const point = map.project(coordinate);

//Pantalla Completa
map.addControl(
  new mapboxgl.FullscreenControl({ container: document.querySelector("body") })
);
