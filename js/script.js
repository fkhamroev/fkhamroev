var swiper = new Swiper('.swiper', {
  slidesPerView: 5,
  breakpoints: {// настройки для разных разрешений
    1100: {
      slidesPerView: 5,
  },
    991: {
      slidesPerView: 4,
  },
    700: {
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
  var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

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