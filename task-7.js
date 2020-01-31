"use strict";
const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

const textFontChangeByMagic = function(event) {
  text.style.fontSize = `${event.target.value}px`;
};

input.addEventListener("input", textFontChangeByMagic);
