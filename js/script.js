"use strict"

let menuButton = document.querySelector('.mobile-button');
let sideBar = document.querySelector('.sidebar');

menuButton.addEventListener('click', function (event) {
  sideBar.classList.toggle('sidebar--visible');
});