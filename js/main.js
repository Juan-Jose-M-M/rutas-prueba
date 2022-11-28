L.mapbox.accessToken =
  "pk.eyJ1IjoianVhbjEyMTEyMTIiLCJhIjoiY2xhenpvbjlrMWU3MTN2bjhzZ3JhbHNwNSJ9.AGQol8An8Lxg3B627nIG1A";
var map = L.mapbox
  .map("map")
  .setView([40, -74.5], 9)
  .addLayer(L.mapbox.styleLayer("mapbox://styles/juan1211212/clazzxvs7001n14pky9cttmux"));
