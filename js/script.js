var swiper = new Swiper('.swiper', {
  slidesPerView: 5,
  breakpoints: {// настройки для разных разрешений
    1100: {
      slidesPerView: 5,
  },
    991: {
      slidesPerView: 4,
  },
    768: {
        slidesPerView: 3,
    },
    200: {
        slidesPerView: 2,
    },
    
},
  autoplay: true,
  direction: getDirection(),
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
  on: {
    resize: function () {
      swiper.changeDirection(getDirection());
    },
  },
});

function getDirection() {
  var windowWidth = window.innerWidth;
  var direction = window.innerWidth <= 100 ? 'vertical' : 'horizontal';

  return direction;
}

/* preloader */


/* ============================= */
/* slider swiper  */
var mySwiper = new Swiper('.swiper1', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// var btn__menu = document.getElementById('.btn__menu');
// var menu =document.querySelector('.nav__menu');
// btn__menu.onclick = function() {
//   menu.style.display="block";
// }