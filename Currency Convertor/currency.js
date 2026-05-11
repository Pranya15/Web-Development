const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");


// Load currency options
for (let select of dropdowns) {
  for (let currCode in countryList) {
    let option = document.createElement("option");
    option.value = currCode;
    option.innerText = currCode;

    if (select.name === "from" && currCode === "USD") {
      option.selected = true;
    }
    if (select.name === "to" && currCode === "INR") {
      option.selected = true;
    }

    select.append(option);
  }

  select.addEventListener("change", (e) => updateFlag(e.target));
}


// Set flags
function updateFlag(element) {
  let curr = element.value;
  let countryCode = countryList[curr];
  let img = element.parentElement.querySelector("img");

  img.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
}


// Working API → https://open.er-api.com
async function updateExchangeRate() {
  let amountInput = document.querySelector(".amount input");
  let amtVal = amountInput.value;

  if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    amountInput.value = "1";
  }

  const URL = `https://open.er-api.com/v6/latest/${fromCurr.value}`;

  try {
    let response = await fetch(URL);
    let data = await response.json();

    let rate = data.rates[toCurr.value];
    let finalAmt = (amtVal * rate).toFixed(2);

    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmt} ${toCurr.value}`;
  } catch (error) {
    msg.innerText = "Error fetching rate";
  }
}


// Button click
btn.addEventListener("click", (e) => {
  e.preventDefault();
  updateExchangeRate();
});


// Load flags + default rate on start
window.addEventListener("load", () => {
  updateFlag(fromCurr);
  updateFlag(toCurr);
  updateExchangeRate();
});
