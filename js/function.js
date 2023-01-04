var browser = $(window), browserWidth =  browser.width(),
    $desktop = browserWidth > 992, $mobile = browserWidth < 992;
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
  var selector = $('.js-tab').find('.js-tab-item').length;

  var activeItem = tabWrapper.find('.tab-active');
  var activeWidth = activeItem.innerWidth();
  var activeHeight = activeItem.innerHeight();

  $(".selector").css({
    "left": activeItem.position.left + "px",
    "width": activeWidth + "px",
    "height": activeHeight + "px"
  });

  tabItem.click(function(e){
    e.preventDefault();
    tabItem.removeClass('tab-active');
    $(this).addClass('tab-active');

    var activeWidth = $(this).innerWidth();
    var itemPos = $(this).position();
    $(".selector").css({
      "left":itemPos.left + "px",
      "width": activeWidth + "px"
    });
  });
}

const pageIntroduce = () => {
  if($desktop){
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
}

const init = function () {
  pageHome();
  fnTabs();
  pageIntroduce();
}();