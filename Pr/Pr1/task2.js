function task2() {
    let n = Number(prompt("Введіть число n:"));
 
    for (let i = 2; i <= n; i++) {
        if (i % 2 === 0) {
          console.log(i);
        }
      }
    }