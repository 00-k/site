(function () {
  const header__nav = document.querySelector(".nav__wrapper");
  window.onscroll = () => {
    if (window.pageYOffset > 20) {
      header__nav.classList.add("header__nav__activ");
    } else {
      header__nav.classList.remove("header__nav__activ");
    }
  };
})();

let nav__burger = document.querySelector(".nav__burger");
let menu = document.querySelector(".nav__row");

nav__burger.addEventListener("click", function () {
  nav__burger.classList.toggle("active");
  menu.classList.toggle("activee");
});

// (function () {
//   const header__nav = document.querySelector(".header__nav__container");
//   window.onscroll = () => {
//     if (window.pageYOffset > 20) {
//       header__nav.classList.add("header__nav__activ");
//     } else {
//       header__nav.classList.remove("header__nav__activ");
//     }
//   };
// })();
// //
// let nav__burger = document.querySelector(".nav_btn");
// let menu = document.querySelector(".nav__list");

// nav__burger.addEventListener("click", function () {
//   nav__burger.classList.toggle("active");
//   menu.classList.toggle("activee");
// });
