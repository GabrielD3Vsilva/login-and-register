const userName = document.getElementById('userName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');


function userProfile (nameProps, emailProps, passwordProps) {
    this.n = nameProps;
    this.e = emailProps;
    this.p = passwordProps;
}

export default {
    userName: userName.value,
    email: email.value,
    password: password.value,
    confirmPassword: confirmPassword.value,
    userProfile: userProfile
}
