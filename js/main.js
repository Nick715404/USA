'use strict'

window.addEventListener('DOMContentLoaded', () => {
  var video = document.querySelectorAll('.video');

  video.forEach((video) => {

    video.addEventListener('click', () => {

      if (video.classList.contains('ready')) {
        return;
      }

      video.classList.add('ready')

      var src = video.dataset.src;

      video.insertAdjacentHTML('afterbegin', '<iframe class="video__frame" src="' + src + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>')
    })
  })
});

var swiper = new Swiper(".swiper", {
  slidesPerView: 6,
  // freeMode: true,
  spaceBetween: 10,
  grabCursor: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    580: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 6,
    }
  }
});

const burgerBtn = document.querySelector('.header__burger');

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('burger').addEventListener('click', () => {
    document.querySelector('header').classList.toggle('open');
  });

});