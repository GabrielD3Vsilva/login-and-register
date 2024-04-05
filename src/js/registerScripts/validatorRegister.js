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
        console.log('ok');
    }
}

export default {
    checkIfInputsEmpty: checkIfInputsEmpty
}