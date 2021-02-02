function addTransition() {
  this.classList.add("calculator-item-onclick");
}

function removeTransition() {
  this.classList.remove("calculator-item-onclick");
}

document.querySelectorAll(".calculator-item").forEach((item) => {
  item.addEventListener("mousedown", addTransition);
  item.addEventListener("mouseup", removeTransition);
});
