// let buttons = document.querySelectorAll('.buttons');
let inputButton = document.querySelectorAll(".buttons input");
let display = document.getElementById("screen");

for (let i = 0; i < inputButton.length; i++) {
  inputButton[i].addEventListener("click", function () {
    // display.value = inputButton[i];
    // display.value = this.value;

    const btn = this.value;

    if (btn == "=") {
      display.value = eval(display.value);
    } else if (btn == "AC") {
      display.value = "";
    } else if (btn == "DE") {
      // ← delete last character
      display.value = display.value.slice(0, -1);
    } else {
      display.value += btn;
    }
  });
}
