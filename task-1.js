"use strict";
//part1

console.log(
  `В списке ${document.querySelector("#categories").children.length} категории.`
);
//part2

document.querySelectorAll(".item").forEach(item =>
  console.log(`категория - ${item.querySelector("h2").textContent}
    количество елементов - ${item.querySelectorAll("li").length} `)
);
