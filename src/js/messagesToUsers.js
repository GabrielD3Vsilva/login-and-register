//retornando mensagem caso inputs vazios

function caseIfInputsIsEmpty ( ) {
    document.getElementById('responseBox').innerHTML = `<h2 class="text-red-700 py-2 text-lg text-center">preencha os campos e tente novamente</h2>`
}


//retornando mensagem caso login feito com sucesso!

function caseUserExists ( ) {
    document.getElementById('responseBox').innerHTML = `<h2 class="text-blue-700 py-2 text-lg text-center">Muito bem!</h2>`
}

//retornando mensagem caso senha curta de mais 

function caseShortPassword ( ) {
    document.getElementById('responseBox').innerHTML = `<h2 class="text-red-700 py-2 text-lg text-center">Senha curta! tente algo mais seguro.</h2>`
}


//retornando mensagem caso senha e confirmação de senha sejam diferentes
function CaseDifferentPasswords ( ) {
    document.getElementById('responseBox').innerHTML = `<h2 class="text-red-700 py-2 text-lg text-center">Sua confirmação de senha não está igual a senha!</h2>`
}

function caseUserExistsInRegister () {
    document.getElementById('responseBox').innerHTML = `<h2 class="text-red-700 py-2 text-lg text-center">Esse email já existente em outra conta.</h2>`
}

function caseIncorrectPassword ( ) {
    document.getElementById('responseBox').innerHTML = `<h2 class="text-red-700 py-2 text-lg text-center">Email ou senha incorretos</h2>`
}


export default {
    caseIfInputsIsEmpty: caseIfInputsIsEmpty,
    caseUserExists: caseUserExists,
    caseShortPassword: caseShortPassword,
    CaseDifferentPasswords: CaseDifferentPasswords,
    caseUserExistsInRegister: caseUserExistsInRegister,
    caseIncorrectPassword: caseIncorrectPassword
}

