let nationmap = L.map('politicalmap').setView([39, -98], 4)

let grayBasemap = ('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}')
let satelliteBasemap = ('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}')
let worldterrainBasemap = ('https://server.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}')

let myGraymap = L.tileLayer(grayBasemap).addTo(nationmap)
let mySatellitemap = L.tileLayer(satelliteBasemap)
let myWorldterrainmap = L.tileLayer(worldterrainBasemap)

let myBasemaps = {
  'Gray Basemap' : myGraymap,
  'Satellite Basemap' : mySatellitemap,
  'Terrain Basemap' : myWorldterrainmap
}

let myGreenPin = L.icon({
  iconUrl: 'greenpin.png',
  iconSize: [40, 40],
  iconAnchor: [20, 40]
})

let Capitol = L.marker([38.9072, -77.0369], {icon: myGreenPin}).addTo(nationmap);
let opLayers = {
  "Capitol of US: Washington, DC": Capitol
}

L.control.layers(myBasemaps, opLayers).addTo(nationmap)

let stateStyle = function (state) {
  let politicalparty = state.properties.STATE_NAME
  let stateColor = 'Red'
  if (politicalparty == "California")  {
    stateColor = 'Blue'
  }
  if (politicalparty == "Hawaii")  {
    stateColor = 'Blue'
  }
  if (politicalparty == "Nevada")  {
    stateColor = 'Blue'
  }
  if (politicalparty == "Oregon")  {
    stateColor = 'Blue'
  }
  if (politicalparty == "Washington")  {
    stateColor = 'Blue'
  }
  if (politicalparty == "Colorado")  {
    stateColor = 'Blue'
  }
  if (politicalparty == "Minnesota")  {
    stateColor = 'Blue'
  }
  if (politicalparty == "New Mexico")  {
    stateColor = 'Blue'
  }
  if (politicalparty == "Connecticut")  {
    stateColor = 'Blue'
  }
  if (politicalparty == "Delaware")  {
    stateColor = 'Blue'
  }
  if (politicalparty == "District of Columbia")  {
    stateColor = 'Blue'
  }
  if (politicalparty == "Illinois")  {
    stateColor = 'Blue'
  }
  if (politicalparty == "Maryland")  {
    stateColor = 'Blue'
  }
  if (politicalparty == "Massachusetts")  {
    stateColor = 'Blue'
  }
  if (politicalparty == "New Hampshire")  {
    stateColor = 'Blue'
  }
  if (politicalparty == "New Jersey")  {
    stateColor = 'Blue'
  }
  if (politicalparty == "New York")  {
    stateColor = 'Blue'
  }
  if (politicalparty == "Rhode Island")  {
    stateColor = 'Blue'
  }
  if (politicalparty == "Vermont")  {
    stateColor = 'Blue'
  }
  if (politicalparty == "Virginia")  {
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
  let males = state.properties.MALES
  layer.bindPopup('Number of males in ' + name + ': ' + males + '<br>Largest population of males: 18.5 million in CA')

}

let stateOptions = {
  style: stateStyle,
  onEachFeature: createPopup
}
L.geoJSON(stateDemographics, stateOptions).addTo(nationmap)
