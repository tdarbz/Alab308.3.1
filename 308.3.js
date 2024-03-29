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

//Feeling Loopy
console.log("Feeling loopy")

// CSV file snippet with data that we want to parse
let csv = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26'

function formatCSV(csv) {
    // Creates the row by spliting the data when there's a new line
    let row = csv.split('\n');

    // Loop to iterate over each row and split the data into cells 
    for(let i = 0; i < row.length; i++) {
        let cell = row[i].split(',');
        console.log(cell[0],cell[1], cell[2], cell[3])
    }
}

console.log(formatCSV(csv))