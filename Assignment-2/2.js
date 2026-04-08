let count = Number(prompt("Enter number of participants:"));


let names = [];


for (let i = 0; i < count; i++) {
    let name = prompt("Enter name of participant " + (i + 1) + ":");
    names.push(name);
}

names.sort();

let list = document.getElementById("participantList");

for (let i = 0; i < names.length; i++) {
    let li = document.createElement("li");
    li.textContent = names[i];
    list.appendChild(li);
}