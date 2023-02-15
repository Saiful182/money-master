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

document.getElementById('save-btn').addEventListener('click', function () {
    const savingPercentage = convertInputFieldValue('input-savings');
    const currentBalance = convertInnerText('balance');
    const remainingBalance = convertInnerText('final-balance');
    const savingsAmount = parseFloat(currentBalance * (savingPercentage / 100));
    const priviousSavings = convertInnerText('total-savings');
    const newSavings = savingsAmount + priviousSavings;
    const newBalanace = currentBalance - savingsAmount;
    const currentRemainingBalance = remainingBalance + newBalanace;
    replaceValue(newSavings, 'total-savings');
    replaceValue(currentRemainingBalance, 'final-balance');

})