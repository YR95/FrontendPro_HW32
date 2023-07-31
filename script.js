class SuperMath {
  //
  // x = 0;
  // y = 0;
  // znak = '';

  check(obj) {

    let yes = confirm(`Чи хочеш зробити дію znak c Х і У?`);
    if (yes) {
      this.x = obj.X;
      this.y = obj.Y;
      this.znak = obj.znak;
      this.functionOperayion();

    } else {
      this.input();
    }
  }

  input() {
    this.x = parseFloat(prompt(`Введи значення X: `));
    while (isNaN(this.x)) {
      this.x = parseFloat(prompt(`Введи значення X ще раз: `));

    }
    this.y = parseFloat(prompt(`Введи значення Y: `));
    while (isNaN(this.y)) {
      this.y = parseFloat(prompt(`Введи значення Y ще раз: `));
    }
    this.znak = prompt(`Введи значення ZNAK: `);
    while (this.znak !== '-' && this.znak !== '+' && this.znak !== '/'
    && this.znak !== '*') {
      this.znak = prompt(`Введи корректне значення ZNAK: `);

    }
    this.functionOperayion();
  }

  functionOperayion() {
    let res;
    switch (this.znak) {
      case "+":
        res = this.x + this.y;
        console.log(`Result of work: ${res}`);

        break;
      case "-":
        res = this.x - this.y;
        console.log(`Result of work: ${res}`);

        break;
      case "*":
        res = this.x * this.y;
        break;
      case "/":
        if (this.x === 0 && this.y !== 0) {
          res = this.x / this.y;
          console.log(`Result of work: ${res}`);
        } else if (this.x !== 0 && this.y === 0) {
          res = this.y / this.x;
          console.log(`Result of work: ${res}`);
        } else if (this.x === 0 && this.y === 0) {
          console.log(`System error :)) Choose other values for x and y`);
          this.input();
        } else {
          res = this.x / this.y;
          console.log(`Result of work: ${res}`);
        }
    }
    return res;
  }
}

obj = {X: 12, Y: 3, znak: '/'};
p = new SuperMath();
p.check(obj);
console.log(p)
