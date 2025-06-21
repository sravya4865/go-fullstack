let n = 10;

//finding prime numbers, there is lot to optimize
nextPrime:
for (let i = 2; i <= n; i++) { // for each i...

  for (let j = 2; j < i; j++) { // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }

  alert( i ); // a prime
}

let num;

do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);