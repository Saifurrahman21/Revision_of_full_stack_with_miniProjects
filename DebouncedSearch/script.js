const search = document.getElementById("search");
const result = document.getElementById("result");

let timer;

search.addEventListener("input", function () {
  clearTimeout(timer);
  timer = setTimeout(function () {
    const value = search.value.trim();

    if (value === "") {
      result.textContent = "";
      return;
    }

    result.textContent = "Searching for: " + value;
    console.log("Searching for:", value);
  }, 2000);
});
