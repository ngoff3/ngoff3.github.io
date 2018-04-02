let statemap = L.map('natesmapid4').setView([39, -98], 4)
let basemapUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
L.tileLayer(basemapUrl).addTo(statemap)

let stateStyle = function (state) {
  let age = state.properties.MED_AGE
  let stateColor = 'Yellow'
  if (age < 38)  {
    stateColor = 'Purple'
  }
  let formatting = {
    color: stateColor,
    weight: 2,
    fillOpacity: 0.2
  }
  return formatting
}
let createPopup = function (state, layer) {
  let name = state.properties.STATE_NAME
  let age = state.properties.MED_AGE
  layer.bindPopup('Median age of ' + name + ': ' + age + '<br>National average: 38')

}

let stateOptions = {
  style: stateStyle,
  onEachFeature: createPopup

}
L.geoJSON(stateDemographics, stateOptions).addTo(statemap)
