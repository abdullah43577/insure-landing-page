"use strict";
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const menu = document.querySelector(".main-nav");

hamburger.addEventListener("click", () => {
  console.log("I'm being clicked");
  menu.classList.toggle("show");
  hamburger.classList.remove("hamburger");
  close.classList.add("hamburger");
});

close.addEventListener("click", () => {
  console.log("I'm being clicked");
  menu.classList.toggle("show");
  close.classList.remove("hamburger");
  hamburger.classList.add("hamburger");
});
