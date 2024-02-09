const numberMoneyInput = document.querySelector("#money-number");
const numberPeopleInput = document.querySelector("#number-people");
const tip5pButtom = document.querySelector("#tip-porcentage5");
const tip10pButtom = document.querySelector("#tip-porcentage10");
const tip15pButtom = document.querySelector("#tip-porcentage15");
const tip25pButtom = document.querySelector("#tip-porcentage25");
const tip50pButtom = document.querySelector("#tip-porcentage50");
const tipPersonP = document.querySelector("#tip-person");
const tipTotalP = document.querySelector("#tip-total");
const textErrorSpan = document.querySelector("#text-error");
const resetButtom = document.querySelector("#reset-page");
const ownTipPercentage = document.querySelector("#own-tip-percentage")

tip5pButtom.addEventListener('click', calculateThe5Tip);
tip10pButtom.addEventListener('click', calculateThe10Tip);
tip15pButtom.addEventListener('click', calculateThe15Tip);
tip25pButtom.addEventListener('click', calculateThe25Tip);
tip50pButtom.addEventListener('click', calculateThe50Tip);
resetButtom.addEventListener('click', resetPage);
ownTipPercentage.addEventListener('keyup', calculateOwnTip);

function calculateThe5Tip() {
    let moneyTotal = Number(numberMoneyInput.value);
    let numberPeople = Number(numberPeopleInput.value);

    if (numberPeople == 0) {
        textErrorSpan.innerHTML = "Can’t be zero";
    } else {
        textErrorSpan.innerHTML = "";

        let calculateTipTotal = (moneyTotal * (5 / 100));
        let calculateTipPeople = calculateTipTotal / numberPeople;
        let totalMoney = moneyTotal + calculateTipTotal
        let personTotalMoney = totalMoney / numberPeople

        tipTotalP.innerHTML = personTotalMoney.toFixed(2);
        tipPersonP.innerHTML = calculateTipPeople.toFixed(2)
    }
}

function calculateThe10Tip() {
    let moneyTotal = Number(numberMoneyInput.value);
    let numberPeople = Number(numberPeopleInput.value);

    if (numberPeople == 0) {
        textErrorSpan.innerHTML = "Can’t be zero";
    } else {
        textErrorSpan.innerHTML = "";

        let calculateTipTotal = (moneyTotal * (10 / 100));
        let calculateTipPeople = (calculateTipTotal / numberPeople);
        let totalMoney = moneyTotal + calculateTipTotal
        let personTotalMoney = totalMoney / numberPeople

        tipTotalP.innerHTML = personTotalMoney.toFixed(2);
        tipPersonP.innerHTML = calculateTipPeople.toFixed(2)
    }
}

function calculateThe15Tip() {
    let moneyTotal = Number(numberMoneyInput.value);
    let numberPeople = Number(numberPeopleInput.value);

    if (numberPeople == 0) {
        textErrorSpan.innerHTML = "Can’t be zero";
    } else {
        textErrorSpan.innerHTML = "";

        let calculateTipTotal = (moneyTotal * (15 / 100));
        let calculateTipPeople = calculateTipTotal / numberPeople;
        let totalMoney = moneyTotal + calculateTipTotal
        let personTotalMoney = totalMoney / numberPeople

        tipTotalP.innerHTML = personTotalMoney.toFixed(2);
        tipPersonP.innerHTML = calculateTipPeople.toFixed(2)
    }
}

function calculateThe25Tip() {
    let moneyTotal = Number(numberMoneyInput.value);
    let numberPeople = Number(numberPeopleInput.value);

    if (numberPeople == 0) {
        textErrorSpan.innerHTML = "Can’t be zero";
    } else {
        textErrorSpan.innerHTML = "";

        let calculateTipTotal = (moneyTotal * (25 / 100));
        let calculateTipPeople = calculateTipTotal / numberPeople;
        let totalMoney = moneyTotal + calculateTipTotal
        let personTotalMoney = totalMoney / numberPeople
        

        tipTotalP.innerHTML = personTotalMoney.toFixed(2);
        tipPersonP.innerHTML = calculateTipPeople.toFixed(2)
    }
}

function calculateThe50Tip() {
    let moneyTotal = Number(numberMoneyInput.value);
    let numberPeople = Number(numberPeopleInput.value);

    if (numberPeople == 0) {
        textErrorSpan.innerHTML = "Can’t be zero";
    } else {
        textErrorSpan.innerHTML = "";

        let calculateTipTotal = (moneyTotal * (50 / 100));
        let calculateTipPeople = calculateTipTotal / numberPeople;
        let totalMoney = moneyTotal + calculateTipTotal
        let personTotalMoney = totalMoney / numberPeople

        tipTotalP.innerHTML = personTotalMoney.toFixed(2);
        tipPersonP.innerHTML = calculateTipPeople.toFixed(2)
    }
}

function calculateOwnTip() {
    let moneyTotal = Number(numberMoneyInput.value);
    let numberPeople = Number(numberPeopleInput.value);
    let tippercentege = Number(ownTipPercentage.value);

    if (numberPeople == 0) {
        textErrorSpan.innerHTML = "Can’t be zero";
    } else {
        textErrorSpan.innerHTML = "";
        
        let calculateTipTotal = (moneyTotal * (tippercentege / 100));
        let calculateTipPeople = calculateTipTotal / numberPeople;
        let totalMoney = moneyTotal + calculateTipTotal
        let personTotalMoney = totalMoney / numberPeople

        tipTotalP.innerHTML = personTotalMoney.toFixed(2);
        tipPersonP.innerHTML = calculateTipPeople.toFixed(2)
    }
}

function resetPage() {
    window.location.href = window.location.href;
}