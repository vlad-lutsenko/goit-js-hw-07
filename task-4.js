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
  value.textContent = currentValue -= 1;
};
const increase = () => {
  value.textContent = currentValue += 1;
};

decrement.addEventListener("click", decrease);
increment.addEventListener("click", increase);
