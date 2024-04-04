import userData from "./userData.js"
import messagesToUsers from "../messagesToUsers.js"


function checkIfInputsIsEmpty( ) {
    let userName = userData.userName
    let email = userData.email
    let password = userData.password
    let confirmPassword = userData.confirmPassword;


    if(!userName || !email || !password|| !confirmPassword ) {
        messagesToUsers.caseIfInputsIsEmpty( );
    } else {
        
    }

}

export default {
    checkIfInputsIsEmpty: checkIfInputsIsEmpty
} 