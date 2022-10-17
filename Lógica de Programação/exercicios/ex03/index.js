// divisor FizzBuzz

// function not be optimized!

function FizzBuzz(n) {
    
    let num;
    let validNumber = n => { return !isNaN(n) ? num = n : num = parseInt(n) };
    validNumber(n);

    if(num % 3 == 0 && num % 5 == 0) return "FizzBuzz";
    if (num % 3 == 0) return "Fizz";
    if (num % 5 == 0) return "Buzz";
    return num;
    


};

console.log(FizzBuzz(5));

