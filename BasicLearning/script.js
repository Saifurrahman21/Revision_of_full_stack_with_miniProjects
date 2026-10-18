// let x = document.querySelector("h1");
// //it help to change the css of the tag
// x.style.color = "red";
// let y = document.querySelector("h2");
// setTimeout(function () {
//   y.style.color = "blue";
// }, 3000);

// // it help to change the html that are given in the html field;
// y.innerHTML = "Noting to do";

// Event listner - agar mai kisi element ko click karun ya usko hover karun ya mouse ko element se bahar kr dun to kuch changes hon
let x = document.querySelector("h1");
let y = document.querySelector("h2");
let z = document.querySelector("h3");

x.style.backgroundColor = "red";
y.style.backgroundColor = "Yellow";
z.style.backgroundColor = "green";

y.addEventListener("mouseover", function () {
  y.style.color = "White";
  y.textContent = "Text Changed";
});
y.addEventListener("mouseleave", function () {
  y.style.color = "Black";
  y.textContent = "Hello Boy";
});

setTimeout(function () {
  x.style.color = "white";
}, 3000);
