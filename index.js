var mySwiper = new Swiper('.s1', {
    spaceBetween: 0,

    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    
    loop: true,
    pagination: {
        el: '.pag1',
        type: 'bullets',
      },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

var mySwiperPrice1 = new Swiper('.s2', {
  spaceBetween: 0,
  autoplay: {
      delay: 2000,
      disableOnInteraction: false,
  },
  
  loop: true,
  pagination: {
      el: '.pag2',
      type: 'bullets',
    },
  navigation: {
    nextEl: '.swiper-button-next-priceS',
    prevEl: '.swiper-button-prev-priceS',
  },
});

var mySwiperPrice2 = new Swiper('.s3', {
  spaceBetween: 0,
  autoplay: {
      delay: 2000,
      disableOnInteraction: false,
  },
  
  loop: true,
  pagination: {
      el: '.pag3',
      type: 'bullets',
    },
  navigation: {
    nextEl: '.swiper-button-next-priceI',
    prevEl: '.swiper-button-prev-priceI',
  },
});

var mySwiperNames = new Swiper('.s4', {
  spaceBetween: 0,
  autoplay: {
      delay: 2000,
      disableOnInteraction: false,
  },
  // effect: 'fade',
  
  loop: true,
  pagination: {
      el: '.pag4',
      type: 'bullets',
    },
});

$('.parallax-window').parallax({imageSrc: 'images/parallax1.jpg'});
  
