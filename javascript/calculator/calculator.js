
//using constructor function
function Calculator() {

  this.read = function() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  };

  this.sum = function() {
    return this.a + this.b;
  };

  this.mul = function() {
    return this.a * this.b;
  };
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );


//using object literal
//best for simple one off objects
let calculator1= {
  read() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  },

  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  }
};

let key = calculator.read();

calculator[key];

//or 
//calculator.read();
alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());


//using ES6 class syntax
//cleaner syntax, resembles Java. Good for reuse & inheritence
class Calculator {
  read() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  }

  sum() {
    return this.a + this.b;
  }

  mul() {
    return this.a * this.b;
  }
}

let calculator2 = new Calculator();
calculator.read();
alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());


//using factory function
//great for creating multiple independent objects without new
function createCalculator() {
  return {
    read() {
      this.a = +prompt('a?', 0);
      this.b = +prompt('b?', 0);
    },
    sum() {
      return this.a + this.b;
    },
    mul() {
      return this.a * this.b;
    }
  };
}

let calculator3 = createCalculator();
calculator.read();
alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());


//using functon with no this
// a and b are private and cannot be accessed from outside
function Calculator() {
  let a, b;

  return {
    read() {
      a = +prompt('a?', 0);
      b = +prompt('b?', 0);
    },
    sum() {
      return a + b;
    },
    mul() {
      return a * b;
    }
  };
}

let calculator4 = Calculator();
calculator.read();
alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());
