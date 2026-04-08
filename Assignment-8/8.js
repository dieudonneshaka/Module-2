function concat(arr) {
    let result = "";
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result;
}


let names = ["Johnny", "DeeDee", "Joey", "Marky"];

document.getElementById("result").textContent = concat(names);