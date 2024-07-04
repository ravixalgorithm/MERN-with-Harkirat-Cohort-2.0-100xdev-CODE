//* Loops
//? For loop
// let ans = 0;
// for (let i = 1; i <= 50; i++) {
//   ans += i;
// }
// console.log(ans);


//* Functions
//? sum of n numbers
// function findsum(n){
//     let ans = 0;
//     for (let i = 1; i <= n; i++) {
//     ans += i;
//     }
//     return ans;
// }
// console.log(findsum(50));

//? Sum of two numbers
// function sum(a,b){
//     return a+b;
// }
// console.log(sum(3,5));


//* Callback functions
//* function in another function
//? find the square of the input
function square(n){
    return n*n;
}

//? finds the sum of the square of the inputs
function sumOfSquare(a,b){
    const val1 = square(a);
    const val2 = square(b);

    return val1 + val2;
}
console.log(sumOfSquare(1,2));

//* function callback in another function as argument
function square(n){
    return n*n;
}
function cube(n){
    return n*n*n;
}
function sumAnything(a,b,Callback){
    const val1 = Callback(a);
    const val2 = Callback(b);
    return val1 + val2;
}
console.log(sumAnything(2,3,cube));

//* Anonymous Callback function => whole function is given as argument
console.log(sumAnything(2,2,function(n){
    return n*n*n;
}))