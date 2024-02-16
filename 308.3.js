//Fizz Buzz problem

let x = 1;
while (x <= 100){
    if (x % 3 == 0 && x % 5 == 0) {
        console.log("Fizz Buzz")
        x++;
    } else if (x % 3 == 0) {
        console.log("Fizz")
        x++;
    } else if (x % 5 == 0) {
        console.log("Buzz")
        x++;
    } else {
        console.log(x)
        x++;
    }
}

//Prime Time



