$(function () {

  function disableScroll() {
    $('body').css('overflow', 'hidden')
  }

  function enableScroll() {
    $('body').css('overflow', 'visible')
  }
  // in modal
  $('.header__burger')
    .click(function () {
      $('.modal--left').fadeIn(200, disableScroll);
      return false;
    });
  $('.header__button')
    .click(function () {
      $('.modal--right').fadeIn(200, disableScroll);
      return false;
    });
  $('.in-modal__center')
    .click(function () {
      $('.modal--center').fadeIn(200, disableScroll);
      return false;
    });

  // out modal
  $('.modal__close-button')
    .click(function () {
      $('.modal').fadeOut(200, enableScroll);
    });
  $('.modal__close')
    .click(function (event) {
      if (event.target == this) {
        $('.modal').fadeOut(200, enableScroll);
      }
    });

  // modal mask
  $(function () {
    $(".phone").mask("+7(999) 999-99-99");
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

  // form send
  $(".form").submit(function (e) {
    e.preventDefault();
    var msg = $(this).serialize();
    $.ajax({
      type: 'POST',
      url: '../php/form.php',
      data: msg,
      success: function (response) {
        console.log(response);
        if (response === 'send Finished') {
          $('.modal').fadeOut(1);
          $('.modal__sent').fadeIn(1);
        } else {
          $('.modal').fadeOut(1);
          $('.modal__error').fadeIn(1);
        };
        return false;
      }
    });
  });

  $("a[href*='#']").on("click", function (e) {
    var anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top
    }, 450);
    e.preventDefault();
    return false;
  });
});