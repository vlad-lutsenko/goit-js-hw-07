"use strict";
const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];
const ingredientsList = document.querySelector("#ingredients");
// ingredientsList.removeAttribute("id");
// ingredientsList.setAttribute("class", "ingredients");

const ingredientsAsLi = ingredients.map(ingredient => {
  const ingredientLi = document.createElement("li");
  ingredientLi.textContent = ingredient;
  return ingredientLi;
});

//якщо я правильно зрозумів звуваження. тепер li створюються окремо, HTML змінюю окремо
ingredientsList.append(...ingredientsAsLi);
