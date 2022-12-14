//navbar
var navbar = document.getElementById("myTopnav");
var logo = document.getElementById("navLogo");
var account = document.getElementById("account");
var indicator = document.getElementById("indicator");

var firstLoad = true;

// if scroll down, hide book form
if (window.innerWidth > 1000){
  form.classList.add("show-form");
}

// responsive navbar menu
function displayNav() {
  var x = document.getElementById("myTopnav");

  if (!x.className.includes("responsive")) {
    x.classList.add("responsive");
  } else {
    x.classList.remove("responsive");
  }
}

// Scrolling behaviour
window.onscroll = function() {
  if (window.pageYOffset >= 250) {
    navbar.classList.add("sticky");
    sidebtn.classList.add("alt-color");
    form.classList.add("alt-color");
    indicator.classList.add("to-top");


    logo.src = "resources/icons/nameicon_black.png";
    account.src = "resources/images/user_black.png";
  }
  else {
    navbar.classList.remove("sticky");
    sidebtn.classList.remove("alt-color");
    indicator.classList.remove("to-top");
    form.classList.add("alt-color");

    logo.src = "resources/icons/nameicon_whiteword_clear.png";
    account.src = "resources/images/user_white.png";
  }
}


// Dismiss form behaviour
function dismissBookingForm(){
  form.classList.remove("show-form");
  sidebtn.classList.remove("btn-active");
}

// Action button behaviour
function scrollAction(){
  if (window.pageYOffset >= 300){
    window.scrollTo(0, 0);
  } else {
    window.scrollTo(0, window.innerHeight - navbar.clientHeight);
  }
}

// Room Selector
function displayRoom(element){
  boxes = document.querySelectorAll('.room-selector .box');
  for (const box of boxes) {
    box.classList.remove('selected');
  }

  element.classList.add('selected');
  document.getElementById('roomImage').src ="resources/images/galleryimg"+ element.id +".jpg";

}

// Carousel
var carousel = document.querySelector('.main-carousel');
var flkty1 = new Flickity( carousel, {
  imagesLoaded: true,
  percentPosition: false,
  contain: true,
  freeScroll: true,
  prevNextButtons: false,
  pageDots: false,
  autoPlay: 1500,
  pauseAutoPlayOnHover: false
});

var review = document.querySelector('.review-carousel');
var flkty = new Flickity( review, {
  prevNextButtons: false,
  autoPlay: 4500,
  pauseAutoPlayOnHover: false
});

var imgs = carousel.querySelectorAll('.carousel-cell img');
// get transform property
var docStyle = document.documentElement.style;
var transformProp = typeof docStyle.transform == 'string' ?
  'transform' : 'WebkitTransform';

flkty1.on( 'scroll', function() {
  flkty1.slides.forEach( function( slide, i ) {
    var img = imgs[i];
    var x = ( slide.target + flkty1.x ) * -1/3;
    img.style[ transformProp ] = 'translateX(' + x  + 'px)';
  });
});

var events = document.querySelector('.events-carousel');
var flkty = new Flickity( events, {
  imagesLoaded: true,
  percentPosition: false,
  contain: true,
  autoPlay: 1200,
  prevNextButtons: false,
  pageDots: false,
});


 // Animation function
 function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("animate");
    }
  }
}

window.addEventListener("scroll", reveal);