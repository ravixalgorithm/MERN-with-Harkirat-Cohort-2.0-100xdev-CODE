//* Asynchronous Function
function findSum(n){
    let ans = 0;
    for(let i = 0; i<=n; i++){
        ans+=i;
    }
    return ans;
}
function findSumTill100(){
   console.log(findSum(100));
}
setTimeout(findSumTill100, 1000) //? Async Function
console.log("Hello World!") //32:46