//Count how many numbers are between 1 and 15 are greater then 8. Loop and count conditionaly

// let count = 0;
// for (let i = 1; i < 16; i++){
//     if(i > 8){
//         count+=1;
//     }
// }
// console.log(count)

// let correctPass = "virat";

// let password = prompt("Password de!!");

// while(password != correctPass){
//     password = prompt("Password de!!");
//     if(password === correctPass){
//         console.log("Done")
//     }
    
// }


// Ask user age and check eliglible to vote or not Question No. 7

// let age = +prompt("Enter your age");

// if (age >= 18) {
//     console.log("You are eligble to vote");
    
// }
// else{
//     console.log("You are not eligble to vote");
    
// }

//print Multiplication table Question no.8

// let n = +prompt("Enter number for table")

// for (let i=1; i<11; i++){
//     console.log(`${n} x ${i} = ${n*i}`)
// };


//Question no. 9
//Count how many numbers between 1 and 15 are greater than 8

// let count = 0;

// for (let i = 1; i<16; i++){
//     if (i>8) {
//         count++;
//     }
// };

// console.log(`${count} numbers are greater than 8`);


//Level-2
// Allow only 3 attempts to enter correct password If user gets it right early, stop. If not → “Account locked”
//Question no. 11

// let correctPassword = "correct";
// let attempts = 0;
// let password;
// let log = false;

// while(attempts<3){
//     password = prompt("Enter Password");
//     attempts++;

//     if (password === correctPassword){
//         console.log("Logged In");
//         log = true;
//         break;
//     }

// }

// if (log === false){
//     console.error("Account locked");
    
// }


// let correctPassword = "correct";
// let log = false;
// let password;

// for (let attempt = 0; attempt<3; attempt++){
//     password = prompt("Enter password");

//     if(password === correctPassword){
//         log = true;
//         console.log("Logged In");
        
//         break;
//     }
// }

// if (log === false){
//     console.log("Account Locked")
// }


//Ask user for words until they type “stop”. Count how many times they typed “yes”


// let word;
// let count = 0;

// while(true){
//     word = prompt("Enter word");

//     if(word === "stop"){
//         break;
//     }

//     if(word === "yes"){
//         count++;
//     }
// }

// console.log(`you said yes ${count} times`);


//Print numbers divisible by 7 from 1 to 50


// for (let i = 1; i<51; i++){
//     if(i % 7 === 0){
//         console.log(i);
//     }
// }



//Sum of all odd numbers from 1 to 30

// let sum = 0;

// for (let i = 1; i< 31; i++){
//     if (i % 2 === 1){
//         sum += i;
//     }
// }

// console.log(`sum of all odd numbers is ${sum}`);



// Keep asking number until user enters an even number
// Use while loop. Stop only if input is even.


// let num;

// while(true){
//     num = +prompt("Enter number");


//     if(num % 2 === 0){
//         console.log("Even number entered. Loop stopped.");
//         break;
//     }
// }


// Print numbers between two user inputs
// Input start and end using prompt() → print all between.


// let first = +prompt("Enter first number")
// let second = +prompt("Enter second number")

// for (let i = first+1; i<second; i++){
//     console.log(i);
// }


// Print only first 3 odd numbers from 1 to 20
// Use loop. Stop with break after 3 odd prints.

// let count = 0;

// for(let i=1; i<21;i++){
//     if(i%2 === 1){
//         console.log(i)
//         count++;
//     }
//     if (count === 3) break;
// };


// Ask user 5 numbers. Count how many are positive
// Use loop + condition + counter.

// let positiveNum = 0;

// for (let i = 1; i<=5; i++){
//     let num = +prompt(`Enter ${i} number:-`)

//     if(num > 0){
//         positiveNum++;
//     }
// }

// console.log(`There are ${positiveNum} positive numbers`)


// ATM Simulator – Allow 3 withdrawals
// Start with ₹1000 balance. Ask withdrawal amount 3 times.
// If enough balance → deduct
// Else → print “Insufficient balance”


// let balance = 1000;

// for(let i = 1; i<=3; i++){
//     let amount = +prompt(`Enter withdrawal amount (${i}/3):`);

//     if(amount<=balance){
//         balance -= amount;
//         console.log(`Withdrawal successful! ₹${amount} deducted.`);
//         console.log(`Remaining balance: ₹${balance}`);
//     }
//     else {
//         console.log("Insufficient balance!");
//         break;
//     }
// }

// console.log(`Final balance: ₹${balance}`);

