$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.slider-1').slick({
        centerPadding:'100px',
        dots:true,
        slidesToShow:1,
        slidesToScroll:1,
     
        arows:true,
    });
   
  });
  $('.slider-2').slick({
    dots:true,
    slidesToShow:3,
       slidesToScroll:1,
       autoplay: true,
       autoplaySpeed:2500,
   });
  


