const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function validatorLogin({email, password}){
    let login = {}
    if(!regexEmail.test(email)){
        login = {...login, email: "este mail no es valido"}
    }
    if(password.length <= 0){
        login = {...login, password: "debes escribir una contraseña"}
    }
    return login
}

export default validatorLogin