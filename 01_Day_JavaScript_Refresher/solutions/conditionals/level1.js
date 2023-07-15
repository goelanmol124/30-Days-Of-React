const prompt=require("prompt-sync")({sigint:true});

let age = 19
//let age = prompt("Enter your age:",'18');
let check = age>=18;

check
    ? console.log("You are old enough to drive.")
    : console.log(`You are left with ${18-age} years to drive.`)

let a = 4
let b = 3
if (a>b){
    console.log(`${a} is greater ${b}`);
} else {
    console.log(`${a} is less than ${b}`)
}

check = a>b;
check 
    ? console.log(`${a} is greater ${b}`)
    : console.log(`${a} is less than ${b}`)

let number = 10 //Number(prompt("Enter a number "))
check = number % 2 == 0;
check
    ? console.log(`${number} is an even number`)
    : console.log(`${number} is an odd number`)

let marks = 67;

switch (true){
    case marks > 80 :
        console.log('A')
        break
    case marks > 70 :
        console.log('B')
        break
    case marks > 60 :
        console.log('C')
        break
    case marks > 50 :
        console.log('D')
        break
    default :
        console.log('F')
}

