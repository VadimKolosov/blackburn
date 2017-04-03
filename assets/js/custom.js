$(function() {
  headlineAnimation();
  hamburgerActive();
  clickMainNav();
  mainLinksShowUp();
});

function headlineAnimation() {
  $('.card--link-to-full').on('click', function() {
  	$('.headline-one').addClass('animation-h2');
  	$('.headline-two').addClass('animation-h3');
  	$('.simple-line').addClass('card--block-effect-line');
    $('.card--logotype svg').addClass('svg-animate');
  });
  $('.card--backbutton').on('click', function() {
  	$('.headline-one').removeClass('animation-h2');
  	$('.headline-two').removeClass('animation-h3');
  	$('.simple-line').removeClass('card--block-effect-line');
    $('.card--logotype svg').removeClass('svg-animate');
  });
}

function hamburgerActive() {
  $('.nav-main--hamburger').on('click', function() {
  	$('.nav-main--menu-wrapper').toggleClass('active-nav-menu');
  	$('.nav-main--hamburger').toggleClass('active-hamburger-icon');
  	$('.nav-main--link').addClass('active-menu-link');
    $('.headline-one').removeClass('animation-h2');
    $('.headline-two').removeClass('animation-h3');
    $('.simple-line').removeClass('card--block-effect-line');
    $('.card--logotype svg').addClass('svg-animate');
  });
}

function clickMainNav() {
  $('.nav-main--link').on('click', function() {
    $('.nav-main--link').removeClass('active-menu-link');
    $('.nav-main--menu-wrapper').addClass('disable-nav-menu').delay(10).queue(function(){
      $(this).removeClass('disable-nav-menu').dequeue();
  });
    $('.nav-main--menu-wrapper').removeClass('active-nav-menu');
  	$('.nav-main--hamburger').removeClass('active-hamburger-icon');
    $('.headline-one').addClass('animation-h2');
  	$('.headline-two').addClass('animation-h3');
  	$('.simple-line').addClass('card--block-effect-line');
  });
}

function mainLinksShowUp() {
  $('input, textarea').focus(function(event) {
    $(this).siblings('.label-span').animate({'top' : '-25px', 'font-size' : '12px'}, 80);
  });
}
