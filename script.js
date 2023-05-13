var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");

function inputLength() {
  return input.value.length;
}

function CreateListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
  li.addEventListener("click", crossOut);

  var dBtn = document.createElement("Button");
  dBtn.appendChild(document.createTextNode("X"));
  li.appendChild(dBtn);
  dBtn.addEventListener("click", deleteListItem);
}

function crossOut() {
  this.classList.toggle("done");
}

function deleteListItem() {
  var li = this.parentNode;
  li.classList.add("delete");
}

function addListAfterClick() {
  if (inputLength() > 0) {
    CreateListElement();
  }
}

function addListAfterPress(event) {
  if (inputLength() > 0 && event.which === 13) {
    CreateListElement();
  }
}

enterButton.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterPress);
