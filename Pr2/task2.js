
const users = [
  { name: "Марк", age: 21 },
  { name: "Настя", age: 17 },
  { name: "Софія", age: 19 },
  { name: "Сергій", age: 23 },
  { name: "Петро", age: 18 },
  { name: "Юля", age: 25 },
  { name: "Андрій", age: 16 },
  { name: "Аня", age: 29 },
];

const adults = users.filter((user) => user.age > 18);

const names = users.map((user) => user.name);

const totalAge = users.reduce((acc, user) => acc + user.age, 0);
const averageAge = totalAge / users.length;

console.log("Всі користувачі:");
users.forEach((u) => console.log(`  ${u.name} — ${u.age} років`));

console.log("\nКористувачі старше 18 років:");
adults.forEach((u) => console.log(`  ${u.name} — ${u.age} років`));

console.log("\nМасив імен усіх користувачів:", names);
console.log("Середній вік користувачів:", averageAge.toFixed(2));