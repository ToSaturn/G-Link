window.onload = function() {

  $('.g-main-banner').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.slick-prev'),
    nextArrow: $('.slick-next')
  });


  $('.g-block-brands').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.slick-prev-brand'),
    nextArrow: $('.slick-next-brand'),

    centerPadding: '1s0px'
  });



  $('.g-block-tovar').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.slick-prev-tovar'),
    nextArrow: $('.slick-next-tovar')

  });

  $('.small-photo').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.slick-prev-photo'),
    nextArrow: $('.slick-next-photo')

  });

}
