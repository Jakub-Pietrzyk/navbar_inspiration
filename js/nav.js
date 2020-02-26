var hamb = document.querySelector("#hamburger");
var nav = document.querySelector("nav");

hamb.onclick = function(){
  nav.classList.toggle("open");
};
