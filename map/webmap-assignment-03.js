let mymap = L.map('natesmapid3').setView([32.804739, -90.593429], 11)
let basemapUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
L.tileLayer(basemapUrl).addTo(mymap)
let poi = L.marker([32.795504,	-90.571457]).addTo(mymap)
let polygon = L.polygon([
  [32.892421,	-90.656601],
  [32.887808,	-90.509659],
  [32.723902,	-90.597549]
]).addTo(mymap)

var myGreenIcon = L.icon({
  iconUrl: 'webmapassignment3photo.png',

  iconSize:     [38, 95], // size of the icon

  iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location

  popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
})

let markerCoords = [32.82054,	-90.597871]
let markerOptions = { icon: myGreenIcon}
let myMarker = L.marker(markerCoords, markerOptions).addTo(mymap)

let refuge = L.marker(markerCoords, markerOptions).addTo(mymap)

let polygonCoords = [
  [32.892421,	-90.656601],
  [32.887808,	-90.509659],
  [32.723902,	-90.597549]
]
let myStyle = {
  color: 'orange',
  fillColor: 'yellow',
  weight: 1,
  dashArray: '3'
}

poi.bindPopup('Panther Swamp')
polygon.bindPopup('Mississippi Wildlife Refuge')

function logCurrentCoordinates (event) {
  console.log('You clicked the map at ' + event.latlng)
}
mymap.on('click', logCurrentCoordinates)

// create a red polyline from an array of LatLng points
let latlngs = [
  [32.816281,	-90.675827],
  [32.822051,	-90.493179],
  ];
let polyline = L.polyline(latlngs, {color: 'red'}).addTo(mymap);
