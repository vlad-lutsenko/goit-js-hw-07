"use strict";

const input = document.querySelector("#validation-input");
const validLength = Number(input.getAttribute("data-length"));

const borderPainter = function(event) {
  let inputTextLength = event.target.value.length;
  inputTextLength === validLength
    ? input.setAttribute("class", "valid")
    : input.setAttribute("class", "invalid");
};

input.addEventListener("blur", borderPainter);
