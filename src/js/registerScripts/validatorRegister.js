import messagesToUsers from '../messagesToUsers.js';


const existingData = JSON.parse(localStorage.getItem("myData")) || [];

function ConstructUser (nameProps, emailProps, passwordProps) {
    this.nameProps = nameProps;
    this.emailProps = emailProps;
    this.passwordProps = passwordProps;
}

function objectExists (emailProps) {
    return existingData.some(object => {
        return object.emailProps === emailProps
    })
}


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

        const userProfile = new ConstructUser (userName.value, userEmail.value, userPassword.value);

        checkIfUserExists(userProfile);

    }
}


function checkIfUserExists(userObjectReturned) {
    const userEmail = document.getElementById('userEmail');

    if(objectExists(userEmail.value)) {
        messagesToUsers.caseUserExistsInRegister( );
    } else {

        console.log('usuário não existente');
        existingData.push(userObjectReturned);
        localStorage.setItem("myData", JSON.stringify(existingData));
        location.href = "index.html";
    }

}

export default {
    checkIfInputsEmpty: checkIfInputsEmpty,
}