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

const fnTabs = () => {
  const tabWrapper = $('.js-tab'), tabItem = $('.js-tab-item');

  tabItem.click(function(e){
    e.preventDefault();
    tabItem.removeClass('tab-active');
    $(this).addClass('tab-active');
  });
}

const pageIntroduce = () => {

  var swiper = new Swiper(".js-swiper-picture", {
    slidesPerView: 4,
    spaceBetween: 32,
    slidesPerGroup: 4,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

const init = function () {
  pageHome();
  fnTabs();
}();