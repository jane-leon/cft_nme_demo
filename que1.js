function fizzBuzz(n)
{
    if(n%3 == 0 && n%5 ==0)
    {
        return "FizzBuzz"
    }
    else if(n%3==0)
    {
        return "Fizz"
    }
    else if(n%5==0)
    {
        return "Buzz"
    }
    return n;
}

console.log(fizzBuzz(1));  // Expected: 1
console.log(fizzBuzz(3));  // Expected: "Fizz"
console.log(fizzBuzz(5));  // Expected: "Buzz"
console.log(fizzBuzz(15)); // Expected: "FizzBuzz"
console.log(fizzBuzz(30)); // Expected: "FizzBuzz"
console.log(fizzBuzz(7));  // Expected: 7
console.log(fizzBuzz(10)); // Expected: "Buzz"
console.log(fizzBuzz(9));  // Expected: "Fizz"