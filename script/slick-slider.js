window.onload = function() {

  $('.g-main-banner').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.slick-prev'),
    nextArrow: $('.slick-next'),
        responsive: [
        {
          breakpoint: 768,
          settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
          }
        }
       ]
  });


  $('.g-block-brands').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.slick-prev-brand'),
    nextArrow: $('.slick-next-brand'),

    centerPadding: '10px',
    responsive: [
    {
      breakpoint: 768,
      settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false
      }
    }
   ]
  });



  $('.g-block-tovar').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.slick-prev-tovar'),
    nextArrow: $('.slick-next-tovar'),
    responsive: [
    {
      breakpoint: 768,
      settings: {
      slidesToShow:1,
      slidesToScroll: 1,
      arrows: false,
      centerMode:true
      }
    }
   ]

  });

  $('.small-photo').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.slick-prev-photo'),
    nextArrow: $('.slick-next-photo'),
    variableWidth: true,
    responsive: [
    {
      breakpoint: 768,
      settings: {
      slidesToShow:1,
      slidesToScroll: 1,
      arrows: false,
      dots:true,
      centerMode:true
      }
    }
   ]

  });

}
