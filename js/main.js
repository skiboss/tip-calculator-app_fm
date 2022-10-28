let bill = document.querySelector("#bill")
let noOfPeople = document.querySelector("#people")
let tipPercentages = document.querySelectorAll(".cl-tip")
let tipAmountPerPerson = document.querySelector("#tip-per-person")
let totalAmountPerPerson = document.querySelector("#total-per-person")
let custom = document.querySelector("#custom")
let reset = document.querySelector(".tip-action")
let formInput = document.querySelectorAll(".form-input")


let billAmount = 0
let numOfPeople = 0
let tipPercentage = 0
let customPercentage = 0

bill.addEventListener("keyup", e => {
    billAmount = Number(e.target.value);
    calculateTip();
})

// reset.addEventListener('click', () => {
//     bill.textContent = "0";
// })

reset.addEventListener('click', () => {
    bill.value = "";
    noOfPeople.value = '';
    custom.value = "";
    billAmount = 0
    numOfPeople = 0
    tipPercentage = 0
    customPercentage = 0
    totalAmountPerPerson.innerText = "0.00"
    tipAmountPerPerson.innerText = "0.00"
    // calculateTip();

}) 

custom.addEventListener("keyup", e => {
    tipPercentage = Number(e.target.value);
    console.log(e.target.value);
    calculateTip();
})

noOfPeople.addEventListener("keyup", e => {
    numOfPeople = Number(e.target.value)
    calculateTip();
})

Array.from(tipPercentages).forEach(tipPercent => {
    tipPercent.addEventListener("click", e => {
        if (e.target.innerText.includes("%")){
            tipPercentage = Number(e.target.innerText.replace("%", ""))
            calculateTip();
        }
    })
})

function calculateTip() {
    let tipAmount = billAmount * (tipPercentage / 100);
    let totalAmount = billAmount + tipAmount;
    let perPersonTip = tipAmount / numOfPeople;
    let perPersonAmount = totalAmount / numOfPeople;

    updateValues({
    perPersonTip,
    perPersonAmount})

    // console.log(tipAmount);
    // console.log(totalAmount);
    // console.log(noOfPeople);
    // console.log(totalAmount);
    // console.log(tipAmount);
    // console.log(perPersonTip);
    // console.log(perPersonAmount);
    // console.log(custom.innerText);
}

function updateValues({perPersonTip, perPersonAmount}) {
    tipAmountPerPerson.innerText =
     perPersonTip == Infinity ? 0 : perPersonTip.toFixed(2);
    totalAmountPerPerson.innerText =
     perPersonAmount == Infinity ? 0 : perPersonAmount.toFixed(2);
}