'use strict'

  const burgerBtn = document.querySelector('.header__burger');

  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('burger').addEventListener('click', () => {
        document.querySelector('header').classList.toggle('open');
    });

  });