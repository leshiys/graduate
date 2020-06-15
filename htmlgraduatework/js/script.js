$(function () {

  function disableScroll() {
    $('body').css('overflow', 'hidden')
  }

  function enableScroll() {
    $('body').css('overflow', 'visible')
  }

  $('.header__burger')
    .click(function () {
      $('.modal--left').fadeIn(200, disableScroll);
      return false;
    });
  $('.modal__close-button')
    .click(function () {
      $('.modal').fadeOut(200, enableScroll);
    });
  $('.modal__background')
    .click(function (event) {
      if (event.target == this) {
        $('.modal').fadeOut(200, enableScroll);
      }
    });
  $('.modal__menu-link')
    .click(function (event) {
      if (event.target == this) {
        $('.modal').fadeOut(200, enableScroll);
      }
    });
  $('.header__button')
    .click(function () {
      $('.modal--right').fadeIn(200, disableScroll);
      return false;
    });
  $('.service__button')
    .click(function () {
      $('.modal--center').fadeIn(200, disableScroll);
      return false;
    });
  $('.portfolio__button')
    .click(function () {
      $('.modal--center').fadeIn(200, disableScroll);
      return false;
    });
  $('.about-my__button')
    .click(function () {
      $('.modal--center').fadeIn(200, disableScroll);
      return false;
    });
  $('.footer__button')
    .click(function () {
      $('.modal--center').fadeIn(200, disableScroll);
      return false;
    });
  $(function () {
    $("#phone").mask("8(999) 999-99-99");
  });
  $(function () {
    $("#phone_1").mask("8(999) 999-99-99");
  });
  function testWebP(callback) {
      var webP = new Image();
      webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
      };
      webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    testWebP(function (support) {
      if (support == true) {
        document.querySelector('body').classList.add('webp');
      }
    });;
  var example = document.getElementById("example"),
        ctx = example.getContext('2d'),
        grd = ctx.createLinearGradient(0, 750, 200, 0);
      example.height = 764;
      example.width  = 920;
      grd.addColorStop(0, "#FF8F5A");
      grd.addColorStop(1, "#FF2F96");
      ctx.beginPath();
      ctx.fill();
      ctx.fillStyle = grd;
      ctx.moveTo(0, 550);
      ctx.bezierCurveTo(0, 400, 300, 0, 540, 0);
      ctx.bezierCurveTo(830, -3, 920, 250, 920, 400);
      ctx.bezierCurveTo(920, 550, 800, 764, 350, 764);
      ctx.bezierCurveTo(150, 764, 0, 700, 0, 550);
      ctx.fill();;
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
});;
});