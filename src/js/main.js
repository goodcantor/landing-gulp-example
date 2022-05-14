let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__nav');
let body = document.querySelector('body');

burger.onclick = function () {
  burger.classList.toggle('opened');
  menu.classList.toggle('header__nav-active');
  body.classList.toggle('scroll-hidden');
};


const navbar = document.querySelector('.header');

window.onscroll = function () {
  const top = window.scrollY;
  if (top == 0) {
    navbar.classList.remove('header-background');
  } else {    
    navbar.classList.add('header-background');
  }
}

