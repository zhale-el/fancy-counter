const increaseButtonEl = document.querySelector(".counter__button-increase");
const counterValueEl = document.querySelector(".counter__value");
const decreaseButtonEl = document.querySelector(".counter__button-decrease");

//---------------------- decrease Button ----------------
decreaseButtonEl.addEventListener("click", function () {
  // get current value of counter
  const counterValue = counterValueEl.textContent;

  //convert value to number type
  const currentValueAsNumber = +counterValue;

  //decrement by 1
  const newNumber = currentValueAsNumber - 1;
  //update counter value with new value
  counterValueEl.textContent = newNumber;
});

//-------------------- increase Button --------------------
increaseButtonEl.addEventListener("click", function () {
  //current value of counter
  const counterVal = counterValueEl.textContent;

  //convert value to number type
  const currentValueAsNumber = +counterVal;

  //increment by 1
  const newValue = currentValueAsNumber + 1;

  //get counter element with new value
  counterValueEl.textContent = newValue;
});
