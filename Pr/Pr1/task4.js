function task4() {
      let a = Number(prompt("Введіть перше число (a):"));
      let b = Number(prompt("Введіть друге число (b):"));
      let op = prompt("Введіть операцію (+, -, *, /):");
      let result;
 
      switch (op) {
        case "+":
          result = a + b;
          break;
        case "-":
          result = a - b;
          break;
        case "*":
          result = a * b;
          break;
        case "/":
          if (b === 0) {
            alert("Ділення на нуль неможливе!");
            return;
          }
          result = a / b;
          break;
        default:
          alert("Невідома операція!");
          return;
      }
 
      alert(a + " " + op + " " + b + " = " + result);
    }
 
