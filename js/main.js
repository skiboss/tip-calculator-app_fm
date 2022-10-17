let bill = document.querySelector("#bill")
let noOfPeople = document.querySelector("#people")
let tipPercentages = document.querySelectorAll(".cl-tip")

let billAmount = 0
let numOfPeople = 0
let tipPercentage = 0

bill.addEventListener("keyup", e => {
    billAmount = Number(e.target.value)
})

noOfPeople.addEventListener("keyup", e => {
    numOfPeople = Number(e.target.value)
})

Array.from(tipPercentages).forEach(tipPercentage => {
    tipPercentage.addEventListener("click", e => {
        if (e.target.innerText.include("%")){
            tipPercentage = Number(e.target.innerText.replace("%", ""))
        }
    })
})