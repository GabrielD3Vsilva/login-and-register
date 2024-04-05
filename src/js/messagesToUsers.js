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


export default {
    caseIfInputsIsEmpty: caseIfInputsIsEmpty,
    caseUserExists: caseUserExists,
    caseShortPassword: caseShortPassword
}

