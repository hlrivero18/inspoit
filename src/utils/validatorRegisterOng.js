const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const caracteres = (valor)=>{ return valor.length <= 0 ? true : false }

function validatorRegisterOng({name, email, password, pResponsable}){
    let ong = {}
     
    if(caracteres(name)){
        ong = {...ong, name: "esta campo no puede estar vacio"}
    }
    if(caracteres(password)){
        ong = {...ong, password: "debes escribir una contraseña valida"}
    }
    if(!regexEmail.test(email)){
        ong = {...ong, email: "debes escribir un mail valido"}
    }
    if(caracteres(pResponsable)){
        ong = {...ong, pResponsable: "debes proporcionar el nombre de la persona responsable"}
    }
    
    return ong
}

export default validatorRegisterOng