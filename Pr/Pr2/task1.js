const numbers = [33, 7, 11, 4, 28, 67, 1, 52, 76, 13, 88, 35];

const sum = numbers.reduce((acc, num) => acc + num, 0);
const average = sum / numbers.length;

const max = Math.max(...numbers);
const min = Math.min(...numbers);

const sort = [...numbers].sort((a, b) => a - b);

console.log("Початковий :", numbers);
console.log("Середнє арифметичне:", average.toFixed(2));
console.log("Максимальне значення:", max);
console.log("Мінімальне значення:", min);
console.log("Відсортований масив:", sort);