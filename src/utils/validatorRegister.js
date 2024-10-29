const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const caracteres = (valor)=>{ return valor.length <= 0 ? true : false }

function validatorRegister({nombre, email, password, repeatPass}){
    let voluntario = {}
     
    if(caracteres(nombre)){
     voluntario = {... voluntario, nombre: "esta campo no puede estar vacio"}
    }
    if(caracteres(password)){
     voluntario = {... voluntario, password: "debes escribir una contraseña valida"}
    }
    if(repeatPass !== password){
        voluntario = {...voluntario, repeatPass: "las contraseñas deben ser iguales"}
    }
    if(!regexEmail.test(email)){
     voluntario = {... voluntario, email: "debes escribir un mail valido"}
    }
    
    return voluntario
}

export default validatorRegister