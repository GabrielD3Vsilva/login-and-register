let usersList = [];

function ConstructUserObject (nameProps, emailProps, passwordProps) {
    this.nameProps = nameProps;
    this.emailProps = emailProps;
    this.passworProps = passwordProps;
}

function createNewUser (nameProps, emailProps, passwordProps) {
    usersList.push(new ConstructUserObject(nameProps, emailProps, passwordProps));
    
    salve ();
}


function salve() {
    console.log(usersList);
}



export default {
    createNewUser: createNewUser
}