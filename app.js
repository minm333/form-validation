const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// FUNCTIONS
// Function: Show input error message
const showError = (input, message) => {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
};

// Function: Show input successs
const showSuccess = (input) => {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
};

// Function: Check if valid email address
const isValidEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

// Function: extract field name
const getFieldName = (input) =>
    input.id.charAt(0).toUpperCase() + input.id.slice(1);

// Function: Check required fields
const checkRequired = (inputArr) => {
    inputArr.forEach((currentInput) => {
        if (currentInput.value.trim() === '') {
            showError(
                currentInput,
                `${getFieldName(currentInput)} is required`
            );
        } else {
            showSuccess(currentInput);
        }
    });
};

// EVENT LISTENERS
// Form submit event listener
form.addEventListener('submit', function (e) {
    e.preventDefault();

    checkRequired([username, email, password, password2]);
});
