//painel inicial dos scripts de registro
import validatorRegister from "./validatorRegister.js";
const btnRegister = document.getElementById('registerButton');

btnRegister.addEventListener('click', validatorRegister.checkIfInputsEmpty);

