//painel inicial dos scripts de login

import validator from "./validator.js";

const btnLoginAction = document.getElementById('btnLoginAction');


btnLoginAction.addEventListener('click', validator.checkIfInputsIsEmpty);


