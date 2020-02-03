"use strict";

const input = document.querySelector("#name-input");

const output = document.querySelector("#name-output");

const inputTransmitter = function(event) {
  const value = event.target.value;
  output.textContent = value ? value : "незнакомец";
};

input.addEventListener("input", inputTransmitter);
