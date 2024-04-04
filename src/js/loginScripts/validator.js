import messagesToUsers from "../messagesToUsers.js";

function checkIfInputsIsEmpty ( ) {
    let email = document.getElementById('email');
    let password = document.getElementById('password');

    if (!email.value || !password.value) {
        email.value = '';
        password.value = '';
        messagesToUsers.caseIfInputsIsEmpty( );
    } else {
        checkIfUserExists( );
    }
}


function checkIfUserExists ( ) {
    messagesToUsers.caseUserExists( );
}

export default {
    checkIfInputsIsEmpty: checkIfInputsIsEmpty,
}