var form1 = document.querySelector('#login-form')
var email = document.querySelector('#email2')
var pass = document.querySelector('#password2')

function showError(input, message) {
    let parent = input.parentElement;
    let errorMessage = parent.querySelector('.form-message2')

    errorMessage.innerText = message
}

function showSuccess(input) {
    let parent = input.parentElement;
    let errorMessage = parent.querySelector('.form-message2')

    errorMessage.innerText = ''
}

function checkEmptyError(listInput) { // Array listInput
    // let isEmptyError = false;
    listInput.forEach(input => {
        input.value = input.value.trim()

        if (!input.value) {
            showError(input, 'Không được để trống')
        } else {
            showSuccess(input)
        }
    });

    // return isEmptyError
}

function checkEmailError(input) {
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    input.value = input.value.trim()

    let isEmailError = !regexEmail.test(input.value)
    if (regexEmail.test(input.value)) {
        showSuccess(input)
    } else {
        showError(input, 'Email không hợp lệ')
    }

    // return isEmailError
}

function checkLengthError(input, min, max) {
    input.value = input.value.trim()

    if (input.value.length < min) {
        showError(input, 'Mật khẩu có tối thiểu 6 kí tự')
        return true
    }

    if (input.value.length > max) {
        showError(input, 'Mật khẩu có tối đa 32 kí tự')
        return true
    }

    showSuccess(input)
        // return false
}

form1.addEventListener('click', function(e) {
    e.preventDefault()

    let isEmptyError = checkEmptyError([email, pass])
    let isEmailError = checkEmailError(email)
    let isUsernameLengthError = checkLengthError(pass, 6, 32)
})