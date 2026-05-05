// Варіант 1: Обробка масиву чисел

const numbers = [15, 3, 42, 8, 27, 6, 19, 55, 11, 34];

const average = numbers.reduce((sum, n) => sum + n, 0) / numbers.length;

const max = Math.max(...numbers);
const min = Math.min(...numbers);

const sorted = [...numbers].sort((a, b) => a - b);

console.log("Обробка масиву чисел");
console.log("Масив:", numbers);
console.log("Середнє арифметичне:", average);
console.log("Максимум:", max);
console.log("Мінімум:", min);
console.log("Відсортований масив:", sorted);

// Варіант 2: Робота з масивом об'єктів
const users = [
  { name: "Олена", age: 22 },
  { name: "Ікар",  age: 16 },
  { name: "Марк", age: 30 },
  { name: "Павло", age: 17 },
  { name: "Анна",  age: 25 },
];

const adults = users.filter(user => user.age > 18);

const names = users.map(user => user.name);

const avgAge = users.reduce((sum, user) => sum + user.age, 0) / users.length;

console.log("\nМасив об'єктів ===");
console.log("Усі користувачі:", users);
console.log("Старше 18 років:", adults);
console.log("Лише імена:", names);
console.log("Середній вік:", avgAge.toFixed(1));

// Варіант 3: Групування об'єктів
const products = [
  { name: "Яблучко",    category: "Фрукти" },
  { name: "Молоко",    category: "Молочні" },
  { name: "Бананчік",     category: "Фрукти" },
  { name: "Сир",       category: "Молочні" },
  { name: "Морква",    category: "Овочі" },
  { name: "Апельсин",  category: "Фрукти" },
  { name: "Кефір",     category: "Молочні" },
  { name: "Картопля",  category: "Овочі" },
];

const grouped = products.reduce((acc, product) => {
  if (!acc[product.category]) {
    acc[product.category] = [];
  }
  acc[product.category].push(product.name);
  return acc;
}, {});

console.log("\nГрупування за категоріями");
for (const [category, items] of Object.entries(grouped)) {
  console.log(`${category}: ${items.join(", ")}`);
}

// Варіант 4: Обробка вкладених об'єктів
const students = {
  "Олек": { Математика: 90, Фізика: 85, Хімія: 78 },
  "Вітя": { Математика: 72, Фізика: 88, Хімія: 95 },
  "Денис":   { Математика: 60, Фізика: 70, Хімія: 65 },
  "Маряна":  { Математика: 95, Фізика: 92, Хімія: 89 },
};

console.log("\nСередній бал студентів");
for (const [student, grades] of Object.entries(students)) {
  const values = Object.values(grades);
  const avg = values.reduce((sum, g) => sum + g, 0) / values.length;
  console.log(`${student}: ${avg.toFixed(1)}`);
}

// Варіант 5: Генерація об'єктів з масиву
const namesList = ["Олег", "Аня", "Марк", "Ліля", "Богдан"];

const nameLengths = namesList.reduce((acc, name) => {
  acc[name] = name.length;
  return acc;
}, {});

console.log("\nІмена → довжини");
console.log(nameLengths);