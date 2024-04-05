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

function checkPasswordLength() {
    const userPassword = document.getElementById('userPassword');
    if(userPassword.value.length < 6) {
        messagesToUsers.caseShortPassword( );
    } else {
        checkPasswordEquality( );
    }
}


function checkPasswordEquality ( ) {
    const userPassword = document.getElementById('userPassword');
    const confirmPassword = document.getElementById('confirm-password');

    if (userPassword.value !== confirmPassword.value) {
        console.log('diferentes');
    } else {
        console.log('iguais');
    }
}

export default {
    checkIfInputsEmpty: checkIfInputsEmpty
}