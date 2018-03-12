function createImageSrc (i) {
  if (projectData[i].hasThumbnail === true) {
    return'images/ss-project-' + projectData[i].id + '.png'
  } else {
    return 'no-preview.png'}
    }
