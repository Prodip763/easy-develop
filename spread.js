const numbers = [23, 42, 52, 82];
// console.log(numbers);
// console.log(...numbers);
const max = Math.max(23,42,52,82)
const maxInArray = Math.max(...numbers);
// console.log(max, maxInArray);

const numbers2 = [22, ...numbers,88];
numbers.push(55);
console.log(numbers2);
document.ge