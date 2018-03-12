let projectData = []

  projectData[0] = {
    id: 1,
    title: 'Book Assignment 1',
    url: 'http://arcg.is/2n2jqWJ',
    hasThumbnail: true
  }

  projectData[1] = {
    id: 2,
    title: 'Book Assignment 2',
    url: 'http://www.arcgis.com/apps/View/index.html?appid=e7c1a0258eed4a82828ca53a980852a4',
    hasThumbnail: false
  }

for (let i = 0; i < projectData.length; i++) {
  let imageSrc = createImageSrc(i)
  console.log(imageSrc)
}

$(document).ready(console.log('The page is ready!'))
