if (typeof Swiper !== "undefined" && document.querySelector(".swiper")) {
  new Swiper(".swiper", {
    loop: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}


const hamMenu = document.querySelector(".ham-menu");
const navMenu = document.querySelector(".nav-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
 hamMenu.classList.remove("active");
 navMenu.classList.remove("active"); 
}))
