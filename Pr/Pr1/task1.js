function task1() {
      let vik = Number(prompt("Введіть ваш вік:"));
 
      if (0 < vik < 18) {
        alert("Вам заборонено вхід");
      } else if (vik >= 18 && vik <= 65) {
        alert("Ласкаво просимо!");
      } else {
        alert("Будь ласка, будьте обережні!");
      }
    }
 
    
 

    