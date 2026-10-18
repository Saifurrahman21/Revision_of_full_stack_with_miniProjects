let main = document.getElementById("main");
let arr = [
  "https://i.pinimg.com/236x/c3/b3/f1/c3b3f1ea25dbf06e84b214751667cbee.jpg",
  "https://i.pinimg.com/1200x/75/8f/29/758f296e7763693424473af6da43b0f2.jpg",
  "https://i.pinimg.com/1200x/65/6f/0f/656f0f76d651692a2590582680c27dac.jpg",
  "https://i.pinimg.com/736x/91/80/bf/9180bf68878240172c5eea7f51e7f3f1.jpg",
  "https://i.pinimg.com/736x/82/11/15/8211153e4a1b79c41d7d3217d78bf494.jpg",
  "https://i.pinimg.com/1200x/9e/b6/1d/9eb61de66238ca8d06b2a4a6c86351ec.jpg",
];

let s = "";
for (let i = 1; i < 30; i++) {
  let r = Math.floor(Math.random() * arr.length);
  s += `<div class="card">
        <img
          src=${arr[r]}
        />
      </div>`;
}
main.innerHTML = s;
