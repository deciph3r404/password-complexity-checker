let password = document.getElementById("password");
let power = document.getElementById("power-point");
let lowUpper = document.querySelector('.low-upper-case');
let oneNumber = document.querySelector('.one-number');
let oneSpecialChar = document.querySelector('.one-special-char');
let eightCharacter = document.querySelector('.eight-character');

password.oninput = function () {
    let point = 0;
    let value = password.value;
    let widthPower = 
        ["1%", "25%", "50%", "75%", "100%"];
    let colorPower = 
        ["#D73F40", "#DC6551", "#F2B84F", "#BDE952", "#3ba62f"];

    if (value.length >= 6) {
        let arrayTest = 
            [/[0-9]/, /[a-z]/, /[A-Z]/, /[^0-9a-zA-Z]/];
        arrayTest.forEach((item) => {
            if (item.test(value)) {
                point += 1;
            }
        });
    }

    // Update ul list
    if (/[a-z]/.test(value) && /[A-Z]/.test(value)) {
        lowUpper.style.color = 'green';
    } else {
        lowUpper.style.color = 'red';
    }

    if (/[0-9]/.test(value)) {
        oneNumber.style.color = 'green';
    } else {
        oneNumber.style.color = 'red';
    }

    if (/[^0-9a-zA-Z]/.test(value)) {
        oneSpecialChar.style.color = 'green';
    } else {
        oneSpecialChar.style.color = 'red';
    }

    if (value.length >= 8) {
        eightCharacter.style.color = 'green';
    } else {
        eightCharacter.style.color = 'red';
    }

    power.style.width = widthPower[point];
    power.style.backgroundColor = colorPower[point];
};