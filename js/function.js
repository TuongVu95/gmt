const pageHome = () => {
  const navMobile = $('.nav-mb');
  const navClose = $('.js-nav-close'), mask = $('.js-mask');
  const menuMb = $('.js-menu-mb');

  var swiper = new Swiper(".js-slide-banner", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  menuMb.click(function(){
    navMobile.addClass('open');
    $('html,body').addClass('disable-scroll');
  });

  navClose.click(function(){
    navMobile.removeClass('open');
    $('html,body').removeClass('disable-scroll');
  });
}

const init = function () {
  pageHome();
}();