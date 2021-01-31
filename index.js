var mySwiper = new Swiper('.swiper-container', {
    spaceBetween: 0,

    autoplay: {
        delay: 8000,
        disableOnInteraction: false,
    },
    
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
  });

$('.parallax-window').parallax({imageSrc: 'images/parallax.png'});
var myModal = new bootstrap.Modal(document.getElementById('myModal'), options)

var easeInOutQuad = new SmoothScroll('[data-easing="easeInOutQuad"]', {easing: 'easeInOutQuad'});

  
