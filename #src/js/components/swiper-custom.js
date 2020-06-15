var mySwiper = new Swiper ('.swiper-container', {
  // Optional parameters
  speed: 600,
  autoplay: {
    delay: 3500,
  },
  grabCursor: true,
  loop: true, 
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  spaceBetween: 30,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    991: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: 'null',
      },
      centeredSlides: true,
      slideToClickedSlide: true,
    }
  }
});