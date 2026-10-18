const input = document.getElementById("input");
const taskList = document.getElementById("taskList");
const deleteAll = document.getElementById("deleteAll");

function addTask() {
  //input box se task ki value lena
  const task = input.value.trim();

  //check karna ki input empty to nhi hai
  if (task === "") {
    alert("Plese enter a valid task");
    return;
  }

  // Create list item
  const li = document.createElement("li");

  // Create task text
  const text = document.createElement("text");
  text.textContent = task;

  //create individual delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  //delete only this task
  deleteBtn.onclick = function () {
    li.remove();
  };

  //add text and button to li
  li.appendChild(text);
  li.appendChild(deleteBtn);

  //li ko ul list ke ander add karna
  taskList.appendChild(li);

  //input box ko empty karna
  input.value = "";
}

deleteAll.onclick = function () {
  taskList.innerHTML = "";
};
