const formadd = document.querySelector('#formadd');
const name = document.querySelector('#name');
const phoneNumber = document.querySelector('#phonenumber');
const email = document.querySelector('#email');
//Send message to the server
//const submitButton = document.querySelector('.formadd input[type=submit]');
//submitButton.addEventListener('click', login);

// Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// Check phone-number is valid
function checkPhonenumber(input) {
  const phoneno = /^(\+{0,})(\d{0,})([(]{1}\d{1,4}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm;
    if(input.value.match(phoneno)) {
    showSuccess(input);
  }
  else {
    showError(input, 'Phone-number is not valid');
  }
}

// Check email is valid
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid');
  }
}

// Check required fields
function checkRequired(inputArr) {
  let isRequired = false;
  inputArr.forEach(function(input) {
    if (input.value.trim() === '') {
      showError(input, `Required field`);
      isRequired = true;
    } else {
      showSuccess(input);
    }
  });

  return isRequired;
}

// Check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

//Get field name
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
 }

// Accept message
formadd.addEventListener('submit', function(e) {
  e.preventDefault();

  if(!checkRequired([name, phonenumber, email])){
    checkLength(name, 3, 15);
    checkPhonenumber(phonenumber);
    checkEmail(email);
    }

})



//Send to server
//async function login(ev) {
   // ev.preventDefault();
    //await fetch('login', {
       // method: 'POST',
        //headers: {
         //   'Content-Type': 'application/json'
       // },
       // body: JSON.stringify({
          //  name: document.querySelector('.formadd input[name=name]').value,
           // phoneNumber: document.querySelector('.formadd input[name=phonenumber]').value,
           // email: document.querySelector('.formadd input[name=email]').value,

       // })
    //})
    //document.querySelector('.formadd').reset();
//}