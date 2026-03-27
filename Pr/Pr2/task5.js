const names = [
  "Марк",
  "Ярослав",
  "Богдан",
  "сергій",
  "Настя",
  "Степан",
  "Софія",
];

const nameLengths = names.reduce((acc, name) => {
  acc[name] = name.length;
  return acc;
}, {});

console.log("Початковий масив імен:", names);
console.log("\nОб'єкт:\n");
console.log(nameLengths);
