let dogs = [];

for (let i = 1; i <= 6; i++) {
    let name = prompt("Enter the name of dog " + i + ":");
    dogs.push(name);
}

dogs.sort();

let list = document.getElementById("dogList");

for (let i = dogs.length - 1; i >= 0; i--) {
    let li = document.createElement("li");
    li.textContent = dogs[i];
    list.appendChild(li);
}