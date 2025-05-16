document.addEventListener("DOMContentLoaded", function () {
  // Typed.js initialization
  var typed = new Typed(".text", {
    strings: ["Frontend Developer", "App Developer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });

  // Burger menu toggle
  const burger = document.getElementById("burger");
  const navbar = document.getElementById("navbar");

  burger.addEventListener("click", () => {
    navbar.classList.toggle("show");
  });
});
