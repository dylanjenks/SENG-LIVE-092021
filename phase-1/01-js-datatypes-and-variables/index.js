// let x = 5

// if (x === 5) {
//     console.log('x is equal to 5!');
// } else if (x ==6 ) {
//     console.log("x is not equal to 5!");
// } else {
//     console.log("x is NOT equal to 5 or 6!")
// }
// -------------------------------------------

// console.log("Check Your Answers Here!");

// 🚧 Break Out Activity 1: Using let vs. const

// Properly declare "x" using "const"

    // const x = 5;

    // console.log(`Success! x = ${x}`);

// Properly declare "y" using "let"

    // 🚨 Uncomment the code below to continue:

    // let y = 5; 

    // console.log(`Success! y = ${y}`);

// Refactor the code below to get a successful response in console

    // 🚨 Uncomment the code below to continue:

    // const a = 2;
    
    // let b = 4
    
    // console.log(`Success! ${a} + ${a} = ${b}`);

// 🚧 Break Out Activity 2: Using if...else

    // 🚨 Uncomment the code below to continue:

    // 🚧 Set a value for "time" between 0 and 24
    // let time = 15;

    // 💡 If "time" is less than or equal to 12...
    // if (time <= 12) { 

    //     console.log(`${time} is in the AM.`)

    // 💡 In all other cases...
    // } else {

    //     console.log(`${time} is in the PM.`)

    // }

    // ✨ BONUS: Try refactoring the above expression using a ternary operator.

// 🚧 Break Out Activity 3: Using if...else...if

    // We are given a variable "marks." Our task is to print:

    // - "AA" if marks is greater than 90.
    // - "AB" if marks is greater than 80 and less than or equal to 90.
    // - "BB" if marks is greater than 70 and less than or equal to 80.
    // - "BC" if marks is greater than 60 and less than or equal to 70.
    // - "CC" if marks is greater than 50 and less than or equal to 60.
    // - "CD" if marks is greater than 40 and less than or equal to 50.
    // - "DD" if marks is greater than 30 and less than or equal to 40.
    // - "FF" if marks is less than or equal to 30.

    // 🚨 Uncomment the code below to continue

    // 🚨 Assign a value to "marks" between 0 and 100
    let marks;

    // 🚨 Format your if...else if...else conditional below
    if (marks > 90) {
        console.log("AA")
    } else if (marks > 80 && marks <= 90) {
        console.log("AB")
    
    } else if (marks > 70 && marks <= 80) {
        console.log("BB")
    
    } else if (marks > 60 && marks <= 70) {
        console.log("BC")
    
    } else if (marks > 50 && marks <= 60) {
        console.log("CC")
    
    } else if (marks > 40 && marks <= 50) {
        console.log("CD")
    
    } else if (marks > 30 && marks <= 40) {
        console.log("DD")
    
    } else {
        console.log("FF")
    }