const students = {
  Настя: {
    Математика: 98,
    Фізика: 89,
    Інформатика: 97,
    Хімія: 82,
  },
  Марк: {
    Математика: 46,
    Фізика: 68,
    Інформатика: 78,
    Хімія: 89,
  },
  Ярослав: {
    Математика: 88,
    Фізика: 91,
    Інформатика: 95,
    Хімія: 89,
  },
  Аня: {
    Математика: 86,
    Фізика: 92,
    Інформатика: 95,
    Хімія: 87,
  },
  Софія: {
    Математика: 95,
    Фізика: 88,
    Інформатика: 100,
    Хімія: 93,
  },
};

const results = Object.entries(students).map(([name, grades]) => {
  const gradeValues = Object.values(grades);
  const avg = gradeValues.reduce((sum, g) => sum + g, 0) / gradeValues.length;
  return { name, average: avg };
});

results.sort((a, b) => b.average - a.average);

console.log("Середній бал студентів:\n");

results.forEach((student, index) => {
  const medal = index === 0 ? "Золото" : index === 1 ? "Срібло " : index === 2 ? "Мідь" : "  ";
  console.log(
    `${medal} ${index + 1}. ${student.name.padEnd(10)} — середній бал: ${student.average.toFixed(2)}`
  );
});

console.log("Детальні оцінки:\n");
for (const [name, grades] of Object.entries(students)) {
  console.log(`${name}:`);
  for (const [subject, grade] of Object.entries(grades)) {
    console.log(`   ${subject}: ${grade}`);
  }
  console.log();
}