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
  @@include('components/webpadd.js');
  @@include('components/radius.js');
  @@include('components/swiper-custom.js');
});