function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

let list = document.getElementById("diceList");
let result;

do {
    result = rollDice();
    let li = document.createElement("li");
    li.textContent = result;
    list.appendChild(li);
} while (result !== 6);