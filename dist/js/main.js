// NAVBAR MENU TOGGLE
const navMenu = document.querySelector(".nav-menu");
const Navbar = document.querySelector(".navbar");

function toggleBar() {
  navMenu.classList.toggle("menu-active");
}

function closeMenu() {
  navMenu.classList.remove("menu-active");
}

const navLinks = document.querySelectorAll(".nav-bar a");

navLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    navLinks.forEach((link) => {
      link.classList.remove("aktif");
    });

    this.classList.add("aktif");

    const sectionId = this.getAttribute("href").substring(1);
    const section = document.getElementById(sectionId);
    const textColor = window.getComputedStyle(section).color;

    document.querySelector(".nav-bar").style.color = textColor;
  });
});

// WINDOW SCROLLL
const up = document.querySelector(".icon-up");
const navbar = document.querySelector(".nav-bar");

window.addEventListener("scroll", () => {
  windowPosisi = window.scrollY > 200;
  up.classList.toggle("icon-active", windowPosisi);
  navbar.classList.toggle("nav-scroll", windowPosisi);
});

// TYPE IT

new TypeIt("#myName", {
  strings: "Hi im Han's       ",
  speed: 200,
  loop: true,
})
  .delete()
  .type("I am a Fullstack Developer", { delay: 2000 })
  .go();

new TypeIt("#myDesc", {
  strings: "                              ",
  speed: 150,
  loop: false,
})
  .type(
    "Senang belajar hal baru, berkomitmen pada tugas yang diberikan, dan mudah beradaptasi.",
    { delay: 1000 }
  )
  .go();

const navLogo = document.querySelector(".nav-bar h1");
const spanLogo = document.querySelector(".nav-bar span");

let isBlue = true;

const kedip = setInterval(() => {
  if (isBlue) {
    navLogo.style.color = "#198ffd";
    spanLogo.style.color = "white";
    isBlue = false;
  } else {
    navLogo.style.color = "white";
    spanLogo.style.color = "#198ffd";
    isBlue = true;
  }
}, 600);

// PROJECT PREVIEW

const indBuy = document.getElementById("indBuy");
const destenize = document.getElementById("destenize");
const suxz = document.getElementById("suxz");
const skyCode = document.getElementById("skyCode");
const kolaborasa = document.getElementById("kolaborasa");

function showIndbuy() {
  indBuy.classList.replace("d-none", "d-flex");
}
function showSuxz() {
  suxz.classList.replace("d-none", "d-flex");
}
function showDestenize() {
  destenize.classList.replace("d-none", "d-flex");
}
function showSky() {
  skyCode.classList.replace("d-none", "d-flex");
}
function showKolaborasa() {
  kolaborasa.classList.replace("d-none", "d-flex");
}

function closePreview() {
  indBuy.classList.replace("d-flex", "d-none");
  suxz.classList.replace("d-flex", "d-none");
  destenize.classList.replace("d-flex", "d-none");
  skyCode.classList.replace("d-flex", "d-none");
  kolaborasa.classList.replace("d-flex", "d-none");
}

var carouselSlide = document.querySelector(".carousel-slide");
