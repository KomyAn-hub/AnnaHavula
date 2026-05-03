<?php
// ВАРІАНТ 1 / VARIANT 1
echo "<h2>Варіант 1</h2>";

// Task 1: Variables and sentence output / Завдання 1: Змінні та виведення речення
$name = "Олексій";
$age = 20;
$is_student = true;

echo "Мене звати $name, мені $age років, я".($is_student ? "студент" : "не студент")."<br>";

// Task 2: Array of numbers 1-5, sum / Завдання 2: Масив чисел 1-5, сума
$numbers = [1, 2, 3, 4, 5];
// array_sum() is more efficient than a loop / array_sum() ефективніша за цикл
$sum = array_sum($numbers);
echo "<p>Сума всіх елементів: <strong>$sum</strong></p>";

// Task 3: Associative array → HTML list / Завдання 3: Асоціативний масив → HTML-список
$contact = [
    "name" => "Олексій Петренко",
    "email" => "oleksiy@example.com",
    "phone" => "+38 050 123 45 67",
];
echo "<ul>";
foreach ($contact as $key => $value) {
    echo "<li><strong>$key:</strong> $value</li>";
}
echo "</ul>";

// Task 4: if — check age > 18 / Завдання 4: if — перевірка віку
echo "<p>Статус: " . ($age > 18 ? "Повнолітній" : "Неповнолітній") . "</p>";

// Task 5: Grade scale (0-100) / Завдання 5: Шкала оцінок
$grade = 85;
// match — обробка умов
$result = match (true) {
    $grade >= 90 => "Відмінно",
    $grade >= 70 => "Добре",
    $grade >= 50 => "Задовільно",
    default => "Незадовільно",
};
echo "<p>Оцінка: <strong>$grade</strong> — $result</p>";


// ВАРІАНТ 2 / VARIANT 2
echo "<h2>Варіант 2</h2>";

// Task 1: Arithmetic operations / Завдання 1: Арифметичні операції [cite: 26]
$a = 5;
$b = 10;
echo "<ul>";
echo "<li>Сума: " . ($a + $b) . "</li>";
echo "<li>Різниця: " . ($a - $b) . "</li>";
echo "<li>Добуток: " . ($a * $b) . "</li>";
// Guard against division by zero / Захист від ділення на нуль
echo "<li>Ділення: " . ($b != 0 ? $a / $b : "на 0") . "</li>";
echo "</ul>";

// Task 2: Days of week array / Завдання 2: Масив днів тижня [cite: 27]
$days = ["Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота", "Неділя"];
echo "<p>3-й день: {$days[2]}, 5-й день: {$days[4]}</p>";

// Task 3: Associative array of products / Завдання 3: Асоціативний масив товарів [cite: 28]
$products = ["Ноутбук" => 25000, "Миша" => 450];
foreach ($products as $p_name => $price) {
    echo "<p>Товар: $p_name, Ціна: $price грн</p>";
}

// Task 4: switch/match — message by day / Завдання 4: switch/match — повідомлення за днем [cite: 29]
$day = "Monday";
$day_msg = match ($day) {
    "Monday" => "Початок тижня",
    "Friday" => "П'ятниця!",
    "Saturday", "Sunday" => "Вихідний",
    default => "Робочий день",
};
echo "<p>День: $day — $day_msg</p>";

// Task 5: Even or odd check / Завдання 5: Перевірка на парність [cite: 30]
$x = 15;
echo "<p>Число $x є " . ($x % 2 === 0 ? "парним" : "непарним") . "</p>";


// ===================================================
// ВАРІАНТ 3 / VARIANT 3
// ===================================================
echo "<h2>Варіант 3</h2>";

// Task 1 & 4: Cost and Discount / Завдання 1 та 4: Вартість та знижка [cite: 32, 35]
$prices = [150, 200, 300];
$total = array_sum($prices);
if ($total > 500) {
    $total *= 0.9; // Apply 10% discount / Застосувати знижку 10%
    echo "<p>Знижка 10% застосована.</p>";
}
echo "<p>Разом до сплати: $total грн</p>";

// Task 2: Movies list / Завдання 2: Список фільмів [cite: 33]
$movies = ["Inception", "Interstellar", "Dune", "Tenet", "The Whale"];
echo "<ul>";
foreach ($movies as $movie) echo "<li>$movie</li>";
echo "</ul>";

// Task 5: Login/password check / Завдання 5: Перевірка логіна/пароля [cite: 36]
$correct_login = "admin";
$correct_pass = "1234";
$input_login = "admin";
$input_pass = "1234";
$auth = ($input_login === $correct_login && $input_pass === $correct_pass);
echo "<p>Доступ: " . ($auth ? "Надано ✅" : "Відмовлено ❌") . "</p>";


// ===================================================
// ВАРІАНТ 4 / VARIANT 4
// ===================================================
echo "<h2>Варіант 4</h2>";

// Task 1: Max and min / Завдання 1: Максимум і мінімум [cite: 38]
$n1 = 42;
$n2 = 17;
echo "<p>Max: " . max($n1, $n2) . ", Min: " . min($n1, $n2) . "</p>";

// Task 3: Students > 80 / Завдання 3: Студенти з балом > 80 [cite: 40]
$students = ["Олег" => 92, "Марія" => 75, "Дмитро" => 88];
echo "<ul>";
foreach ($students as $student => $score) {
    if ($score > 80) echo "<li>$student ($score)</li>";
}
echo "</ul>";

// Task 4: Divisibility by 3 or 5 / Завдання 4: Кратність 3 або 5 [cite: 41]
$num = 12;
$is_divisible = ($num % 3 === 0 || $num % 5 === 0);
echo "<p>Число $num " . ($is_divisible ? "кратне 3 або 5" : "не кратне") . "</p>";

// Task 5: Multiplication table for 7 / Завдання 5: Таблиця множення на 7 [cite: 42]
echo "7 x: ";
for ($i = 1; $i <= 10; $i++) echo (7 * $i) . " ";


// ===================================================
// ВАРІАНТ 5 / VARIANT 5
// ===================================================
echo "<h2>Варіант 5</h2>";

// Task 1: Full name and calculated age / Завдання 1: Повне ім'я та обчислений вік [cite: 44]
$first_name = "Олексій";
$last_name = "Петренко";
$y_birth = 2001;
$current_age = (int)date("Y") - $y_birth;
echo "<p>Користувач: $first_name $last_name, Вік: $current_age</p>";

// Task 3: Cities > 1 million / Завдання 3: Міста > 1 млн [cite: 46]
$cities = ["Київ" => 2900000, "Львів" => 720000, "Одеса" => 1010000];
echo "<ul>";
foreach ($cities as $city => $pop) {
    if ($pop > 1000000) echo "<li>$city: " . number_format($pop) . "</li>";
}
echo "</ul>";

// Task 5: Leap year check / Завдання 5: Перевірка високосного року [cite: 48]
$year = (int)date("Y");
// Correct Gregorian leap year logic / Правильна логіка високосного року
$is_leap = ($year % 4 === 0 && $year % 100 !== 0) || ($year % 400 === 0);
echo "Рік $year є " . ($is_leap ? "високосним" : "звичайним");
