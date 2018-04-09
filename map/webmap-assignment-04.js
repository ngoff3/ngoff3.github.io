let statemap = L.map('natesmapid4').setView([39, -98], 4)
let basemapUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
L.tileLayer(basemapUrl).addTo(statemap)

let stateStyle = function (state) {
  let age = state.properties.AGE_UNDER5
  let stateColor = 'Red'
  if (age > 5)  {
    stateColor = 'Blue'
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
  let age = state.properties.AGE_UNDER5
  layer.bindPopup('Population Under Age 5 ' + name + ': ' + age + '<br>US Total Under Age 5: 23,000,000')

}

let stateOptions = {
  style: stateStyle,
  onEachFeature: createPopup

}
L.geoJSON(stateDemographics, stateOptions).addTo(statemap)
