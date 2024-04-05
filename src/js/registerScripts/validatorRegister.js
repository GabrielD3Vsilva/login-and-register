import messagesToUsers from '../messagesToUsers.js'

function checkIfInputsEmpty( ) {
    const userName = document.getElementById('userName');
    const userEmail = document.getElementById('userEmail');
    const userPassword = document.getElementById('userPassword');
    const confirmPassword = document.getElementById('confirm-password');

    if(userName.value == '' || userEmail.value == '' || userPassword.value =='' || 
    confirmPassword.value == '') {
        userName.value = '';
        userEmail.value = '';
        userPassword.value = '';
        confirmPassword.value = '';

        messagesToUsers.caseIfInputsIsEmpty( ); 
    } else {
        checkPasswordLength(userPassword);
    }
}

function checkPasswordLength(password) {
    if(password.value.length < 6) {
        console.log('senha curta');
    } else {
        console.log('senha legal');
    }
}

export default {
    checkIfInputsEmpty: checkIfInputsEmpty
}