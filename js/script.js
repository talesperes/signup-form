const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const emailAddress = document.getElementById('emailAddress');
const password = document.getElementById('password');
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	verifyFields();
});

password.addEventListener('paste', (e) => {
  e.preventDefault();
});

[firstName, lastName, emailAddress, password].forEach((element)=>{
    element.addEventListener('input', (e)=>{
      setValid(element);
   });
});

function verifyFields() {

    if(!firstName.value.trim()) {
        setInvalid(firstName);
    } else {
        setValid(firstName);
    }

    if(!lastName.value.trim()) {
        setInvalid(lastName);
    } else {
        setValid(lastName);
    }

    if(!validateEmail(emailAddress.value)) {
        setInvalid(emailAddress);
    } else {
        setValid(emailAddress);
    }

    if(!password.value.trim()) {
        setInvalid(password);
    } else {
        setValid(password);
    }

}

function setInvalid(element) {
    element.classList.add('input-alert');
    element.closest('.input-group').querySelector('.alert').style.display = 'inline';
}

function setValid(element) {
    element.classList.remove('input-alert');
    element.closest('.input-group').querySelector('.alert').style.display = 'none';
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

