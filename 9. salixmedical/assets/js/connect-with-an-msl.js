const form = document.getElementById("form");
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const zipCode = document.getElementById("zipcode");
const practise = document.getElementById("practise");
const phoneNo = document.getElementById("phone");
const eMail = document.getElementById("email");

// Alphabets Field valitation Prototype
String.prototype.isAlpha = function () {
    return !!this.match(/^[a-zA-Z]*$/);
};
// Number Field valitaion Prototype
String.prototype.isNumbers = function () {
    return !!this.match('^[0-9]+$');
};
// Alphabets&Numbers Field valitaion Prototype
String.prototype.isAlphaNum = function () {
    return !!this.match(/^[0-9a-zA-Z]+$/);
};
// Email Field valitation Prototype
String.prototype.isEmail = function () {
    return !!this.match(/^\w+@[a-zA-Z]+?\.[a-zA-Z]{2,3}$/);
};


// Empty Field valitaion
function checkRequired(inputs) {
    inputs.forEach(inputs => {
        if (inputs.value.trim() === "") {
            emptyField(inputs, `${getFieldName(inputs)} is Required.`);
        } else {
            filledField(inputs)
        }
    });
}
function getFieldName(inputs) {
    return inputs.name;
}
function emptyField(inputs, message) {
    const formGroup = inputs.parentElement;
    formGroup.className = "form-group error"
    const errorText = formGroup.querySelector("p");
    errorText.innerHTML = message;
}
function filledField(inputs) {
    checkAlpha(firstName);
    checkAlpha(lastName);
    checkNum(zipCode, 5);
    // checkAlphaNum(practise);
    textLength(practise, 1, 20);
    checkNum(phoneNo, 10);
    checkEmail(eMail);

    // const formGroup = inputs.parentElement;
    // formGroup.className = "form-group filled"
    // const errorText = formGroup.querySelector("p");
    // errorText.innerHTML = "";
}
// Empty Field valitaion End


// Alphabets Field Valitaion
function checkAlpha(inputs) {
    if (!inputs.value.trim().isAlpha()) {
        emptyField(inputs, `${getFieldName(inputs)} must be Alphabets.`);
    } else {
        textLength(inputs, 1, 20);
        textLength(inputs, 1, 20);
    }
}
// Numbers Field Valitaion
function checkNum(inputs, digit) {
    if (!inputs.value.trim().isNumbers()) {
        emptyField(inputs, `Please fill Numbers only.`);
    } else {
        const dataLength = inputs.value.trim().length;
        if ((dataLength != digit)) {
            emptyField(inputs, `${getFieldName(inputs)} must be 5 numbers.`);
        } else {
            const formGroup = inputs.parentElement;
            formGroup.className = "form-group filled"
            const errorText = formGroup.querySelector("p");
            errorText.innerHTML = "";
        }
    }
}
// Alphabets&Numbers Field Valitaion
function checkAlphaNum(inputs) {
    if (!inputs.value.trim().isAlphaNum()) {
        emptyField(inputs, `This field only for Alphabets and Numbers.`);
    } else {
        textLength(inputs, 1, 20);
        // textLength(eMail, 5, 40);
    }
}
// Email Field Valitaion
function checkEmail(inputs) {
    if (!inputs.value.trim().isEmail()) {
        emptyField(inputs, `This is not a valid ${getFieldName(inputs)} address.`);
    } else {
        textLength(eMail, 5, 40);
    }
}
// ConfirmPassword Valitation
function checkConfirmPassword(password, confirmPassword) {
    if (password.value != confirmPassword.value) {
        emptyField(confirmPassword, `${getFieldName(confirmPassword)} does not match.`);
    } 
}


// Field text Length Valitation
function textLength(inputs, min, max) {
    const dataLength = inputs.value.trim().length;
    if (dataLength < min) {
        emptyField(inputs, `${getFieldName(inputs)} must be atleast greater then ${min} characters.`);
    } else if (dataLength > max) {
        emptyField(inputs, `${getFieldName(inputs)} must be aleast lesser then ${max} characters.`);
    } else {
        const formGroup = inputs.parentElement;
        formGroup.className = "form-group filled"
        const errorText = formGroup.querySelector("p");
        errorText.innerHTML = "";
        submitedPopup("true");

        // filledField(inputs)
    }
}


function submitedPopup(status) {
    const submitionPopup = document.querySelector(".submition");
    if ("true" == status) {
        // submitionPopup.classList.add = ("active");
        submitionPopup.className = "submition active";
        console.log(submitionPopup);
    }
}


// Valitation functions call submit event
form.addEventListener("submit", function (e) {
    e.preventDefault();
    checkRequired([firstName, lastName, zipCode, practise, phoneNo, eMail]);

    // textLength(password, 5, 15);
    // checkConfirmPassword(password, confirmPassword);
});






// const fieldOpen = document.querySelector(".select");
// fieldOpen.addEventListener('click', () => {
//     fieldOpen.className = "select open"
// })