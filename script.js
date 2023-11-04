const counterEl = document.querySelector(".counter");
const increaseButtonEl = document.querySelector(".counter__button-increase");
const counterValueEl = document.querySelector(".counter__value");
const decreaseButtonEl = document.querySelector(".counter__button-decrease");
const resetButtonEl = document.querySelector(".counter__rest-button");
const counterTitle = document.querySelector(".counter__title");

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
  let newValue = currentValueAsNumber + 1;

  //check if new value is greater than 5
  if (newValue > 5) {
    //if it is, force it to be 5 instead
    newValue = 5;
    counterEl.classList.add("counter--limit");

    //update counter title to say limit has been reached
    counterTitle.innerHTML = "Limit! Buy <b>Pro</b> for >5";

    increaseButtonEl.disabled = true;
    decreaseButtonEl.disabled = true;
  }
  //get counter element with new value
  counterValueEl.textContent = newValue;
}

decreaseButtonEl.addEventListener("click", decrementCounter);

increaseButtonEl.addEventListener("click", incrementCounter);

resetButtonEl.addEventListener("click", function () {
  counterValueEl.textContent = 0;

  //reset backgroundColor
  counterEl.classList.remove("counter--limit");

  //reset counter Title
  counterTitle.textContent = "Fancy Counter";

  //enable increase and decrease button
  increaseButtonEl.disabled = false;
  decreaseButtonEl.disabled = false;
});

// ----- key down ----
document.addEventListener("keydown", incrementCounter);
