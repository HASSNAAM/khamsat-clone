// aside menu
let bars = document.getElementById("menu-bars");
let aside = document.getElementById("aside");

bars.onclick = function () {
  if (aside.style.display === "block") {
    aside.style.animationName = "hideAside";
    setTimeout(() => {
      aside.style.display = "none";
    }, 500);
  } else {
    aside.style.display = "block";
    aside.style.animationName = "aside";
  }
};
let list1 = document.getElementById("list1");
let aside2 = document.getElementById("aside2");
let icon = list1.querySelector(".icon");
list1.onclick = function () {
  aside2.classList.toggle("hidden");
  icon.classList.toggle("fa-angle-left");
  icon.classList.toggle("fa-angle-down");
};
let list2 = document.getElementById("list2");
let aside3 = document.getElementById("aside3");
let icon2 = list2.querySelector(".icon2");
list2.onclick = function () {
  aside3.classList.toggle("hidden");
  icon2.classList.toggle("fa-angle-left");
  icon2.classList.toggle("fa-angle-down");
};
let list3 = document.getElementById("list3");
let aside4 = document.getElementById("aside4");
let icon3 = list3.querySelector(".icon3");
list3.onclick = function () {
  aside4.classList.toggle("hidden");
  icon3.classList.toggle("fa-angle-left");
  icon3.classList.toggle("fa-angle-down");
};
let list4 = document.getElementById("list4");
let aside5 = document.getElementById("aside5");
let icon4 = list4.querySelector(".icon4");
list4.onclick = function () {
  aside5.classList.toggle("hidden");
  icon4.classList.toggle("fa-angle-left");
  icon4.classList.toggle("fa-angle-down");
};
