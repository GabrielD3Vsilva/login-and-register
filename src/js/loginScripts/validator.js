import messagesToUsers from "../messagesToUsers.js";

const existingData = JSON.parse(localStorage.getItem("myData")) || [];

function objectExists (emailProps, passwordProps) {
    return existingData.some(object => {
        return object.emailProps === emailProps &&
        object.passwordProps === passwordProps
    })
}


function checkIfInputsIsEmpty ( ) {
    let email = document.getElementById('email');
    let password = document.getElementById('password');

    if (!email.value || !password.value) {
        email.value = '';
        password.value = '';
        messagesToUsers.caseIfInputsIsEmpty( );
    } else {
        email.value = '';
        password.value = '';
        checkIfUserExists( );
    }
}

function checkIfUserExists ( ) {
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    if(objectExists(email.value, password.value)) {
        messagesToUsers.caseUserExists( );
        email.value = '';
        password.value = '';
    } else {
        
        messagesToUsers.caseIncorrectPassword( );
    }
    
}

export default {
    checkIfInputsIsEmpty: checkIfInputsIsEmpty,
}