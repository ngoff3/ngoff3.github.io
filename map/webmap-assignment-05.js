let statemap = L.map('natesmapid5').setView([39, -98], 4)

let grayBasemap = ('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}')
let satelliteBasemap = ('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}')
let worldterrainBasemap = ('https://server.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}')

let myGraymap = L.tileLayer(grayBasemap).addTo(statemap)
let mySatellitemap = L.tileLayer(satelliteBasemap)
let myWorldterrainmap = L.tileLayer(worldterrainBasemap)

let myBasemaps = {
  'Gray Basemap' : myGraymap,
  'Satellite Basemap' : mySatellitemap,
  'Terrain Basemap' : myWorldterrainmap
}

L.control.layers(myBasemaps).addTo(statemap)

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
