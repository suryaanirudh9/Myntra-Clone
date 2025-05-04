$(document).ready(function(){
  $('.carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    arrows: false,
    dots: true,
    pauseOnHover: false
  });
});


$(document).ready(function(){
  $('.carousel-all').slick({
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    arrows: false,
    dots: true,
    pauseOnHover: false
  });
}); 