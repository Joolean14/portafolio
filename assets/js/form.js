const form = document.getElementById('form');
const userName = document.getElementById('userName');
const email = document.getElementById('email');
const message = document.getElementById('message');


form.addEventListener('submit', e => {
    e.preventDefault()
    checkInputs();
    errors = document.getElementsByClassName('error') 
    if (errors.length === 0){
        form.submit();
    }
});

function checkInputs() {
    const userNameValue = userName.value.trim();
    const emailValue = email.value.trim();
    const messageValue = message.value.trim();

    if (userNameValue === '') {
        setErrorFor(userName, 'Nombre no puede estar vacío');
    } else {
        setSuccessFor(userName);
    }

    if (emailValue === '') {
        setErrorFor(email, 'Email no puede estar vacío');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'No es un correo válido');
    } else {
        setSuccessFor(email);
    } 
    
    if (messageValue === '') {
        setErrorFor(message, 'Mensaje no puede estar vacío');
    } else {
        setSuccessFor(message);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


