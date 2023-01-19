var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  imagesLoaded: true,
  percentPosition: true,
  wrapAround: true,
  draggable: false,
  // pauseAutoPlayOnHover: true,
  // disableAutoplay()
});