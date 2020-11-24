$(function(){
    $('.slider__info').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider__image',
        swipe: false,
      });
      $('.slider__image').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider__info',
        swipe: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="../images/previous.png" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../images/next.png" alt=""></button>'
      });
});