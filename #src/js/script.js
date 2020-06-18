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
  @@include('components/webpadd.js');
  @@include('components/radius.js');
  @@include('components/swiper-custom.js');
});