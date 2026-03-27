const products = [
  { name: "Яблучко", category: "Фрукти" },
  { name: "Молочко", category: "Молочні продукти" },
  { name: "Бананчік", category: "Фрукти" },
  { name: "Сир", category: "Молочні продукти" },
  { name: "Хліб", category: "Випічка" },
  { name: "Апельсин", category: "Фрукти" },
  { name: "Йогурт", category: "Молочні продукти" },
  { name: "Булочка", category: "Випічка" },
  { name: "Кефір", category: "Молочні продукти" },
  { name: "Батон", category: "Випічка" },
];

const grouped = products.reduce((acc, product) => {
  const { category, name } = product;
  if (!acc[category]) {
    acc[category] = [];
  }
  acc[category].push(name);
  return acc;
}, {});

console.log("Товари, згруповані за категоріями:\n");

for (const [category, items] of Object.entries(grouped)) {
  console.log(`${category} (${items.length} шт.):`);
  items.forEach((item) => console.log(`   • ${item}`));
  console.log();
}