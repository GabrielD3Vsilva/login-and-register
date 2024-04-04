function checkIfInputsIsEmpty ( ) {
    let email = document.getElementById('email');
    let password = document.getElementById('password');

    if (email.value == '' || password.value == '') {
        console.log('preencha os campos')
    } else {
        console.log('logado')
    }
}

export default {
    checkIfInputsIsEmpty: checkIfInputsIsEmpty
}