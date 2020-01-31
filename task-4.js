"use strict";
const decrement = document.querySelector(
  '#counter button[data-action="decrement"]'
);
const increment = document.querySelector(
  '#counter button[data-action="increment"]'
);

const value = document.querySelector("#value");

let currentValue = 0;

const decrease = () => {
  currentValue -= 1;
  value.textContent = currentValue;
};
const increase = () => {
  currentValue += 1;
  value.textContent = currentValue;
};

decrement.addEventListener("click", decrease);
increment.addEventListener("click", increase);
