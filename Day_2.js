// Activity-1

let a = 40;
let b = 20;
console.log(a-=b);
let sum = (a+b);
let substract = (a-b);
let multiply = (a*b);
let divide = (a/b);
let reminder = (a%b);

console.log(sum);
console.log(substract);
console.log(multiply);
console.log(divide);
console.log(reminder);

// Activity-2

console.log(a+=b);

// Activity 3
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
console.log(a == b);
console.log(a === b);

// Activity 4
console.log(a>5 && b>5);
console.log(a%5 === 0 || b%5 == 0);
console.log(a != b);

// Activity 5
console.log(a> 5? "a greater than 5" : "a less than 5");


// Feature Request:
// 1:
console.log("a+b: " + (a + b))
console.log("a-b: " + (a - b))
console.log("ab: " + (a * b))
console.log("a/b: " + (a / b))
console.log("a%b: " + (a % b))

// 2:
console.log("((a + b) > (a - b)) && ((a * b) < (a / b)): " + (((a + b) > (a - b)) && ((a * b) <= (a / b))))
console.log("((a + b) > (a - b))  || ((a * b) < (a / b)): " + (((a + b) >= (a - b)) || ((a * b) < (a / b))))

// 3:
a = -45
a > 0 ? console.log("a is positive") : console.log("a is negative")