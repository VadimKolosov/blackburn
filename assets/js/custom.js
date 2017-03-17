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
  });
  $('.card--backbutton').on('click', function() {
  	$('.headline-one').removeClass('animation-h2');
  	$('.headline-two').removeClass('animation-h3');
  	$('.simple-line').removeClass('card--block-effect-line');
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
  });
}

function clickMainNav() {
  $('.nav-main--link').on('click', function() {
    $('.nav-main--link').removeClass('active-menu-link');
    $('.nav-main--menu-wrapper').addClass('disable-nav-menu').delay(300).queue(function(){
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

}
