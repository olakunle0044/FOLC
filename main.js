const swiper = new Swiper('.swiper', {
        
        loop: true,

        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },

        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });

let navLink = document.getElementById('navlink');
navlink.style.maxHeight = '0px';

function toggleMenu(){
  if(navlink.style.maxHeight == '0px'){
    navlink.style.maxHeight = '100vh';
  } else{
    navlink.style.maxHeight = '0px';
  }
}     