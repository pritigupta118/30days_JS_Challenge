// Task-1

let num = 0;
if (num > 0) {
  console.log("num is positive");
} else if(num < 0) {
  console.log("num is negetive");
} else{
  console.log("num is zero");
}

// Task-2

let age = 5
if (age >= 18) {
  console.log("The person is eligible to vote");
}  else{
  console.log("THe person is not eligible to vote");
}

// Task-3

let num1 = 200;
let num2 = 55;
let num3 = 922;

if(num1 > num2){
  if (num1 > num3) {
    console.log("num1 is the largest of three numbers");
  } else{
    console.log("num3 is the largest of three numbers");
  }
} else{
  console.log("num2 is the largest of three numbers");
}

// Task-4

let day = "sunday"
switch (day) {
  case "sunday":
    console.log("this is sunday");
    break;
  case "monday":
    console.log("this is monday");
    break;
  case "tuesday":
    console.log("this is tuesday");
    break;
  case "wednesday":
    console.log("this is wednesday");
    break;
  case "thursday":
    console.log("this is thursday");
    break;
  case "friday":
    console.log("this is friday");
    break;
  case "saturday":
    console.log("this is saturday");
    break;
  default:
    console.log("Invalid day");
    break;
}

// Task-5

let score = 95;

switch (true) {
    case (score >= 90):
        console.log("Grade: A");
        break;
    case (score >= 80):
        console.log("Grade: B");
        break;
    case (score >= 70):
        console.log("Grade: C");
        break;
    case (score >= 60):
        console.log("Grade: D");
        break;
    default:
        console.log("Grade: F");
}


// Task-6

let number = 9
console.log(number % 2 == 0 ? "the number is even number" : "the number is odd number");

// Task-7

let year = 2024
if (year % 4 === 0) {
  if(year % 100 === 0){
    if(year % 400 === 0){
      console.log(`${year} is a leap year`);
    } else{
      console.log(`${year} is not a leap year`);
    }
  } else{
    console.log(`${year} is a leap year`);
  }
} else{
  console.log(`${year} is not a leap year`);
}