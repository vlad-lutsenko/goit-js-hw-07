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

ingredients.forEach(ingredient => {
  const ingredientLi = document.createElement("li");
  ingredientLi.textContent = ingredient;
  ingredientsList.append(ingredientLi);
});
