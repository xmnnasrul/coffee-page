// toggle navbar
const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

function toggleNavbar() {
  let navbar = document.querySelector(".navbar");
  if (window.innerWidth > 768) {
    // hanya jalankan pada tampilan desktop
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      let currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        // Scroll up
        navbar.classList.remove("hide-nav");
      } else {
        // Scroll down
        navbar.classList.add("hide-nav");
      }
      prevScrollpos = currentScrollPos;
    };
  } else {
    // nonaktifkan saat tampilan mobile
    navbar.classList.remove("hide-nav");
    window.onscroll = null;
  }
}

toggleNavbar();

window.addEventListener("resize", function () {
  toggleNavbar();
});

TweenMax.to(".hu__hu__", 1, { y: 20, yoyo: true, repeat: -1, ease: Sine.easeInOut });
