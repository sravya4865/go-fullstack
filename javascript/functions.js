function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Did parents allow you?');
  }
}

function checkAge(age) {
  return (age > 18) ? true : confirm('Did parents allow you?');
}

//same as above but different approach
function checkAge(age) {
  return (age > 18) || confirm('Did parents allow you?');
}

//x in power of n
function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
  alert(`Power ${n} is not supported, use a positive integer`);
} else {
  alert( pow(x, n) );
}

//function declaration vs function expression
//block scope
let age = 16;

if (age < 18) {
  welcome();               
  function welcome() {     
    alert("Hello!");       
  }                         
  welcome();               

} else {

  function welcome() {
    alert("Greetings!");
  }
}



welcome(); // Error: welcome is not defined

let age1 = prompt("What is your age?", 18);

let welcome;

if (age1 < 18) {

  welcome = function() {
    alert("Hello!");
  };

} else {

  welcome = function() {
    alert("Greetings!");
  };

}

welcome(); // ok now


// Arrow function

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);