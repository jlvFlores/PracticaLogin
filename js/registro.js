// declaracion de variables
const nombre = document.getElementById('name');
const email = document.getElementById('email');
const user = document.getElementById('user');
const pass = document.getElementById('pass');
const formulario = document.getElementById('formRegistro');

// Generacion de eventos
formulario.addEventListener('submit', registro);

//funciones a ejecutar
function registro(e){
    e.preventDefault();

    let nombreVal = nombre.value;
    let emailVal = email.value;
    let userVal = user.value;
    let passVal = pass.value;

    if(nombreVal == '' || emailVal == '' || userVal == '' || passVal == ''){
        return;
    }

    console.log('validando datos!');

}