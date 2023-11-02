const increaseButtonEl = document.querySelector(".counter__button-increase");
const counterValueEl = document.querySelector(".counter__value");
const decreaseButtonEl = document.querySelector(".counter__button-decrease");
const resetButtonEl = document.querySelector(".counter__rest-button");

function decrementCounter() {
  // get current value of counter
  const counterValue = counterValueEl.textContent;

  //convert value to number type
  const currentValueAsNumber = +counterValue;

  //decrement by 1
  let newNumber = currentValueAsNumber - 1;

  //check if new value is less than 0
  if (newNumber < 0) {
    newNumber = 0;
  }

  //update counter value with new value
  counterValueEl.textContent = newNumber;
}

function incrementCounter() {
  //current value of counter
  const counterVal = counterValueEl.textContent;

  //convert value to number type
  const currentValueAsNumber = +counterVal;

  //increment by 1
  const newValue = currentValueAsNumber + 1;

  //get counter element with new value
  counterValueEl.textContent = newValue;
}

decreaseButtonEl.addEventListener("click", decrementCounter);

increaseButtonEl.addEventListener("click", incrementCounter);

resetButtonEl.addEventListener("click", function () {
  counterValueEl.textContent = 0;
});

// ----- key down ----
document.addEventListener("keydown", incrementCounter);
