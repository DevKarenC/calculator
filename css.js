function addTransition() {
  this.classList.add("calculator-key-onclick");
}

function removeTransition() {
  this.classList.remove("calculator-key-onclick");
}

document.querySelectorAll(".calculator-key").forEach((key) => {
  key.addEventListener("mousedown", addTransition);
  key.addEventListener("mouseup", removeTransition);
});
