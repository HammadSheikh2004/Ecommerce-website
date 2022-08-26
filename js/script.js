let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

window.onscroll = () => {
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}

document.querySelectorAll('.accordion-container .accordion').forEach(accordion => {
  accordion.onclick = () => {
    accordion.classList.toggle('active')
  }
});

let countDate = new Date('sep 10, 2022 10:30:00').getTime();

function countDown() {

  let now = new Date().getTime();
  gap = countDate - now;

  let seconds = 1000;
  let minutes = seconds * 60;
  let hours = minutes * 60;
  let days = hours * 24;

  let d = Math.floor(gap / (days));
  let h = Math.floor((gap % (days)) / (hours));
  let m = Math.floor((gap % (hours)) / (minutes));
  let s = Math.floor((gap % (minutes)) / (seconds));

  document.getElementById('days').innerText = d;
  document.getElementById('hours').innerText = h;
  document.getElementById('minutes').innerText = m;
  document.getElementById('seconds').innerText = s;
}

setInterval(function () {
  countDown()
}, 1000);


var swiper = new Swiper(".home-slide", {
  loop: true,
  grabCurser: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".review-slide", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  breakpoints: {
    450: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});




