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
          $('.modal').fadeOut(200, enableScroll);
          $('.modal__sent').fadeIn(200, disableScroll);
        } else {
          $('.modal').fadeOut(200, enableScroll);
          $('.modal__error').fadeIn(200, disableScroll);
        }
      }
    })
  });
});