function task3() {
      let n = Number(prompt("Введіть число n для факторіалу:"));
      let result = 1;
      let i = 1;
 
      while (i <= n) {
        result = result * i;
        i++;
      }
 
      console.log(n + "! = " + result);
    }