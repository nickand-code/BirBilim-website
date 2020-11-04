var mySwiper = new Swiper('.swiper-container', {
    spaceBetween: 0,

    autoplay: {
        delay: 2000,
    },
    
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
      },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });

$('.parallax-window').parallax({imageSrc: 'images/parallax1.jpg'});
  
