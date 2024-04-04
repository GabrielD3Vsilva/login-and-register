const userName = document.getElementById('userName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');


const userProfile = {
    userName: userName.value,
    email: email.value,
    password: password.value,
    confirmPassword: confirmPassword.value
}

export default {
    userName: userName.value,
    email: email.value,
    password: password.value,
    confirmPassword: confirmPassword.value,
    userProfile: userProfile
}
