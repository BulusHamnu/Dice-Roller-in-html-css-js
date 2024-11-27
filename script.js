//
const dices =  document.querySelectorAll('.dice');
const rollDiceBtn = document.querySelector(".roll-dice")


function rollDice () {
    let dice = Math.floor(Math.random() * (6 - 1) + 1);
    dices.forEach( dice => {
        dice.classList.remove("active");
    })

    dices[dice -1].classList.toggle("active")
}


rollDiceBtn.addEventListener('click', rollDice)



