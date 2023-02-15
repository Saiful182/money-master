function convertInputFieldValue(inputId) {
    const inputFieldString = document.getElementById(inputId);
    const inputValue = parseFloat(inputFieldString.value);
    return inputValue;
}
function convertInnerText(inputId) {
    const innerTextString = document.getElementById(inputId);
    const innerText = parseFloat(innerTextString.innerText);

    return innerText;
}

function replaceValue(value, inputId) {
    const innerTextString = document.getElementById(inputId);
    innerTextString.innerText = value;
    const newBalance = parseFloat(innerTextString.innerText);
    return newBalance;
}


document.getElementById('claculate-btn').addEventListener('click', function () {
    const inputIncome = convertInputFieldValue('income-field');
    const PriviousBalance = convertInnerText('balance');
    const balanece = (inputIncome + PriviousBalance).toFixed(2);

    const inputRentExpences = convertInputFieldValue('rent-expences');
    const inputFoodExpences = convertInputFieldValue('food-expences');
    const inputClothsExpences = convertInputFieldValue('clothes-expences');
    const currentExpences = inputClothsExpences + inputRentExpences + inputFoodExpences;
    const priviousExpences = convertInnerText('expences');


    const newExpences = (currentExpences + priviousExpences).toFixed(2);

    const newBalance = balanece - currentExpences;

    replaceValue(newExpences, 'expences');
    replaceValue(newBalance, 'balance');
})