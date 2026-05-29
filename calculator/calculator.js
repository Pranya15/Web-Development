let display = document.getElementById("display");

function appendValue(value) {
  display.value = display.value + value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {

  if (display.value === "") {
    display.value = "";
  }
  else {

    try {

      let result = eval(display.value);

      if (result === undefined) {
        display.value = "Error";
      }
      else {
        display.value = result;
      }

    }
    catch (error) {
      display.value = "Error";
    }

  }
}