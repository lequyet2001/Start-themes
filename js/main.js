window.onscroll = function () { myFunction() }
let navigation = document.getElementById("navigation");
let scrollHeader = navigation.offsetTop;
let banner = document.getElementById("banner");
let color_text_download = document.getElementById("item__link-download");
let color_text_features = document.getElementById("item__link-features");
let color_text_contact = document.getElementById("item__link-contact");
function myFunction() {
    if (window.pageYOffset > scrollHeader) {
        navigation.classList.add("scrollHeader");
        color_text_download.style.color = "black";
        color_text_features.style.color = "black";
        color_text_contact.style.color = "black";
    } else {
        navigation.classList.remove("scrollHeader");
        color_text_download.style.color = "rgba(255,255,255,.7)";
        color_text_features.style.color = "rgba(255,255,255,.7)";
        color_text_contact.style.color = "rgba(255,255,255,.7)";
    }
}