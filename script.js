const increaseButtonEl = document.querySelector(".counter__button-increase");
const counterValueEl = document.querySelector(".counter__value");

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
