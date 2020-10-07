"use strict";

window.onscroll = function () {
  myFunction();
};

var navigation = document.getElementById("navigation");
var scrollHeader = navigation.offsetTop;
var banner = document.getElementById("banner");
var color_text = document.getElementById("item__link-download");
var color_text_features = document.getElementById("item__link-features");
var color_text_contact = document.getElementById("item__link-contact");

function myFunction() {
  if (window.pageYOffset > scrollHeader) {
    navigation.classList.add("scrollHeader");
    color_text.style.color = "black";
    color_text_features.style.color = "black";
    color_text_contact.style.color = "black";
  } else {
    navigation.classList.remove("scrollHeader");
    color_text.style.color = "rgba(255,255,255,.7)";
    color_text_features.style.color = "rgba(255,255,255,.7)";
    color_text_contact.style.color = "rgba(255,255,255,.7)";
  }
}