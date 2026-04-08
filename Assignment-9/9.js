function even(arr) {
    let evens = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evens.push(arr[i]);
        }
    }
    return evens;
}

let numbers = [2, 7, 4, 9, 12];
let evenNumbers = even(numbers);

console.log("Original array:", numbers);
console.log("Even numbers:", evenNumbers);