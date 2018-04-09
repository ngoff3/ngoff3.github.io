let statemap = L.map('natesmapid5').setView([39, -98], 4)
let grayBasemap = L.titleLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}').addTo(statemap)
let satelliteBasemap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}').addTo(statemap)
let myBasemaps = {
  'Light basemap': grayBasemap,
  'Dark basemap': satelliteBasemap
}

L.control.layers(myBasemaps).addTo(stateMap)

let stateStyle = function (state) {
  let age = state.properties.AGE_UNDER5
  let stateColor = 'Red'
  if (age > 500000)  {
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
