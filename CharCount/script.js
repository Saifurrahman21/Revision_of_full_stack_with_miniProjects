const textarea = document.getElementById("message");
const count = document.getElementById("count");
const counter = document.querySelector(".counter");

textarea.addEventListener("input", function () {
  const total = textarea.value.length;

  count.textContent = total;

  if (total === 100) {
    counter.classList.add("limit");
  } else {
    counter.classList.remove("limit");
  }
});
