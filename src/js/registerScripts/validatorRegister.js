import messagesToUsers from '../messagesToUsers.js'
import createUsers from './createUsers.js';


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
        userPassword.value = '';
        confirmPassword.value = '';
        messagesToUsers.CaseDifferentPasswords( );
    } else {
        const userName = document.getElementById('userName');
        const userEmail = document.getElementById('userEmail');
        createUsers.createNewUser(userName.value, userEmail.value, userPassword.value)
    }
}

export default {
    checkIfInputsEmpty: checkIfInputsEmpty
}