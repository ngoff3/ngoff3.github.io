let projectArray = [
  2,
  'http://arcg.is/2n2jqWJ',
  'Book Assignment 1',
  'Tour of Baton Rouge',
  true,
  ['Tour', 'Baton', 'Rouge']
]

let projectObject = {
  id: 2,
  url: 'http://www.arcgis.com/apps/View/index.html?appid=e7c1a0258eed4a82828ca53a980852a4',
  title: 'Earthquake',
  desc: 'ArcGIS Earthquake near South China Sea',
  thumb: true,
  keywords: [
    'Earthquake',
    'China',
    'Sea'
  ]
}

console.log(projectArray[2])
console.log(projectObject.title)
console.log(projectObject["title"])
