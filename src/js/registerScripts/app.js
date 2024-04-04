import validator from "./validator.js";

const registerButton = document.getElementById('registerButton');


registerButton.addEventListener('click', validator.checkIfInputsIsEmpty);