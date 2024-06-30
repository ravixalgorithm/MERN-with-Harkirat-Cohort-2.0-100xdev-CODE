// console.log("hello world");
// //console.log(a); //! Partial error

// //* Variables - var(not used now), let, const
// var a = 1;
// a = 5; // can be changed later
// console.log(a);

// let b = 1;
// b = 5; // can be changed later
// console.log(b)

// const c = 1;
// //c = 5; //! cannot be changed
// console.log(c);

// //* Data Types - int, string, boolean
// let firstName = "Algorithm";
// let age = 20;
// let isMarried = false;

// console.log("This person's name is "+firstName+" and his age is "+age+"\nmarriage status: "+ isMarried)


// //* If/else Statements
// if(isMarried){
//     console.log(firstName +" is Married");
// }
// else{
//     console.log(firstName+" is not Married");
// }

// //* Loops - For loop
// let answer = 0;
// for(let i = 0; i<=100; i++){
//     answer = answer + i;
// }
// console.log(answer);

// //* Arrays
// const personArray = ["Harkirat", "Algorithm", "Ravi"];
// console.log(personArray[0]);
// console.log(personArray[1]);
// console.log(personArray[2]);

// const ages = [21, 22, 23, 24, 25];
// //? Print all even numbers
// for( let i = 0; i<ages.length; i++){
//     if(ages[i] % 2 == 0){
//         console.log(ages[i]);
//     }
// }
// //? Print the biggest number
// let max = ages[0];
// for(let i = 1; i<ages.length; i++){
//     if(ages[i]>max){
//         max = ages[i];
//     }
// }
// console.log("Maximum Value is: " + max);

// //* Objects
// const allUsers =[{
//     firstName: "Harkirat",
//     gender: "male"
// }, {
//     firstName: "Algorithm",
//     gender: "male"
// }, {
//     firstName: "Ravi",
//     gender: "male"
// }, {
//     firstName: "Priya",
//     gender: "female"
// }] // Array of Objects

// for(let i = 0; i<allUsers.length; i++){
//     if(allUsers[i]["gender"] == "female"){
//         console.log(allUsers[i]["firstName"]);
//     }
// }

// //* Functions
// //? Function to sum two numbers
// function sum(a, b){
//     // do things with the input and return an output
//     let sumValue = a + b;
//     return sumValue;
// }

// const ans1 = sum(1,2);
// console.log(ans1);

// //* Function callback
// function calculateArithmetic(a, b, func){
//     const value = func(a,b);
//     return value;
// }

// function sum(a,b){
//     return a+b;
// }
// function sub(a,b){
//     return a-b;
// }

// const ans2 = calculateArithmetic(1,2,sum);
// console.log(ans2);