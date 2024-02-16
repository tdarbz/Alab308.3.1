//Fizz Buzz problem
console.log("Fizz Buzz problem")

let x = 1;
while (x <= 100){
    //if statement that checks if the number is divisble by 3 & 5 logs Fizz Buzz to the screen
    if (x % 3 == 0 && x % 5 == 0) {
        console.log("Fizz Buzz")
        x++;
     // else if checks if divisible by 3 logs Fizz to the screen
    } else if (x % 3 == 0) {
        console.log("Fizz")
        x++;
    // else if that checks if divisible by 5 logs Buzz to the screen
    } else if (x % 5 == 0) {
        console.log("Buzz")
        x++;
    } else {
        console.log(x)
        x++;
    }
}

console.log('')
console.log("Prime Time")

//Prime Time

let n = 7;

// Function to check if a number is prime
function isPrime(num) {
  for(let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++)
    if(num % i === 0) return false; 
  return num > 1;
}

// Create a loop that searches for the next prime number, starting at n and incrementing from there.
let nextPrime = n;
do {
  nextPrime++;
} while (!isPrime(nextPrime));

// As soon as you find the prime number, log that number and exit the loop.
console.log(nextPrime);

console.log('')

