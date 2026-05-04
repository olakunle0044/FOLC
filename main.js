/*swiper*/

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

/*nav-menu*/

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


/*gallery*/

const albums = {
  birthday: ["images/birthday/img6.JPG","images/birthday/img15.jpeg"],
  dedication: ["images/dedication/img13.jpeg","images/dedication/im13a.jpg","images/dedication/im13b.jpg","images/dedication/im13c.jpg","images/dedication/im13d.jpg","images/dedication/im13e.jpg","images/dedication/im13f.jpg","images/dedication/im13g.jpg"],
  christmas: ["images/christmas/img7.JPG","images/christmas/img3.JPG"],
  crossover: ["images/crossover/cross1.JPG","images/crossover/cross2.JPG","images/crossover/cross3.JPG","images/crossover/cross4.JPG","images/crossover/cross5.JPG"],
  father: ["image/friends/1.jpg","image/friends/2.jpg","image/friends/3.jpg","image/friends/4.jpg","image/friends/5.jpg"],
  mothers: ["images/mother/img9.JPG","images/mother/img12.jpeg","images/mother/img14.jpeg"],
  outreach: ["image/nature/1.jpg","image/nature/2.jpg","image/nature/3.jpg","image/nature/4.jpg","image/nature/5.jpg"],
  thanksgiving: ["images/thanksgiving/img5.JPG","images/thanksgiving/img4.JPG","images/thanksgiving/img8.JPG","images/thanksgiving/img10.JPG"],
  tta: ["images/tta/tta-group-photo_orig.jpg","image/tta/tta-group-pic-2019_orig"],
  matrimony: ["images/matrimony/img11.jpeg"]
};

function openAlbum(name) {
  document.getElementById("albumGrid").style.display = "none";
  document.getElementById("albumView").classList.remove("hidden");

  document.getElementById("albumTitle").innerText = name;

  const container = document.getElementById("albumContent");
  container.innerHTML = "";

  albums[name].forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.onclick = () => openLightbox(src);
    container.appendChild(img);
  });
}

function closeAlbum() {
  document.getElementById("albumGrid").style.display = "grid";
  document.getElementById("albumView").classList.add("hidden");
}

function openLightbox(src) {
  const lightbox = document.getElementById("lightbox");
  const img = document.getElementById("lightboxImg");

  img.src = src;
  lightbox.classList.remove("hidden");
}

function closeLightbox() {
  document.getElementById("lightbox").classList.add("hidden");
}