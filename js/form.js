// adding javascript functionality

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// adding eventlistener

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInput();
})

function checkInput() {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const password2Val = password2.value.trim();

    if(usernameVal === ''){
        setErrorFor(username, 'Username must not be blank');
    }

    else if(usernameVal.length < 6){
        setErrorFor(username, 'Username must not be less than 6 characters');
    }

    else{
        setSuccessFor(username);
    }

    if(emailVal === ''){
        setErrorFor(email, 'This field is compulsory');
    }

    else{
        setSuccessFor(email);
    }

    if(passwordVal === ''){
        setErrorFor(password, 'This field is compulsory');
    }

    else if(passwordVal.length < 8){
        setErrorFor(password, 'Password must not be less than 8 characters');
    }

    else{
        setSuccessFor(password);
    }

    if(password2Val === ''){
        setErrorFor(password2, 'This field is compulsory');
    }

    else if (password2Val !== passwordVal){
        setErrorFor(password2, 'Password mismatch');
    }

    else{
        setSuccessFor(password2);
    }
}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    // sending error message
    small.innerText = message;


    formControl.className = 'form-control error';
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');


    formControl.className = 'form-control success';
}