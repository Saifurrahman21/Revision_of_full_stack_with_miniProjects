let s1 = document.getElementById("sq1");
let s2 = document.getElementById("sq2");
let s3 = document.getElementById("sq3");
let s4 = document.getElementById("sq4");

s1.addEventListener("mouseenter", function () {
  let r = Math.floor(Math.random() * 100);
  s1.innerHTML = `<h1>${r}</h1>`;
});

s1.addEventListener("dblclick", function () {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  s1.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

s1.addEventListener("mouseleave", function () {
  s1.innerHTML = `<h1>${1}</h1>`;
});

let color = "red";
s2.addEventListener("mouseover", function () {
  if (color === "red") {
    s2.style.backgroundColor = "red";
    color = "green";
  } else {
    s2.style.backgroundColor = "green";
    color = "red";
  }
});

s2.addEventListener("mouseleave", function () {
  s2.style.backgroundColor = "white";
});

s3.addEventListener("mouseover", function () {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  s3.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

s3.addEventListener("mouseleave", function () {
  s3.style.backgroundColor = "white";
});

s4.addEventListener("click", function () {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  s1.style.backgroundColor = `rgb(255, ${g}, ${b})`;
  s2.style.backgroundColor = `rgb(${r}, 255, ${b})`;
  s3.style.backgroundColor = `rgb(${r}, ${g}, 255)`;
});

s4.addEventListener("mouseleave", function () {
  s1.style.backgroundColor = "white";
  s2.style.backgroundColor = "white";
  s3.style.backgroundColor = "white";
});

let main = document.getElementById("main");
let csr = document.getElementById("cursor");

main.addEventListener("mousemove", function (dets) {
  csr.style.left = dets.x + "px";
  csr.style.top = dets.y + "px";
});
