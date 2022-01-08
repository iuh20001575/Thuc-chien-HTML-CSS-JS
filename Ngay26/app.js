const validatorsItem = document.querySelectorAll('.item-validator');
const inputPassword = document.getElementById('password');
const submitBtn = document.querySelector('.submit');
const showPasswordBtn = document.querySelector('.show-password');

const validator = {
    isIncludeLowerCase(string) {
        return /[a-z]/.test(string);
    },
    isIncludeUpperCase(string) {
        return /[A-Z]/.test(string);
    },
    isIncludeNumber(string) {
        return /\d/.test(string);
    },
    isIncludeSpecialSymbol(string) {
        return /[^\w]/.test(string);
    },
    isLength: string => string.length >= 8,
};
let isHiddenPassword = false;

inputPassword.onkeyup = e => {
    let isStandard = true;
    const valueInput = e.target.value;
    new Promise(resolve => {
        Object.entries(validator).forEach(([key, value], index) => {
            const result = value(valueInput);
            if (!result)
                isStandard = false;
            validatorsItem[index].classList.toggle('checked', result);
        })
        resolve(isStandard);
    })
        .then(result =>  submitBtn.disabled = !result)  
        .catch(err => console.log('Error'));
}

showPasswordBtn.onclick = () => {
    showPasswordBtn.classList.toggle('show', isHiddenPassword);
    isHiddenPassword = !isHiddenPassword;
    if (isHiddenPassword)
        inputPassword.type = 'text';
    else
        inputPassword.type = 'password';
}