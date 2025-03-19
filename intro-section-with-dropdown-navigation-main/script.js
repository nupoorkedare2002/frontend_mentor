var tl = gsap.timeline();
tl.from("h1", {
  y: -20,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  stagger: 0.3,
});

var tl = gsap.timeline();
tl.from("p", {
  y: -20,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  stagger: 0.3,
});

var tl = gsap.timeline();
tl.from("nav", {
  y: -20,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  stagger: 0.3,
});

var tl = gsap.timeline();
tl.from("Button", {
  y: -20,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  stagger: 0.3,
});

var tl = gsap.timeline();
tl.from("img", {
  y: -20,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  stagger: 0.3,
});

// hamburger menu
const menuBtn = document.getElementById("menu-btn");
const menuIcon = document.getElementById("menu-icon");
const mobileMenu = document.getElementById("mobile-menu");

// Toggle Menu Function
menuBtn.addEventListener("click", function () {
  mobileMenu.classList.toggle("hidden");

  // Swap icons when menu opens/closes
  if (mobileMenu.classList.contains("hidden")) {
    menuIcon.src = "./images/icon-menu.svg"; // Show hamburger
  } else {
    menuIcon.src = "./images/icon-close.svg"; // Show close icon
  }
});
