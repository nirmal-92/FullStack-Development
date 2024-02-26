//IIFE-Immediately invoked function - [use it i top of the file, no function name, enroced in brackets, function call in same function which is defined]
(function(){
    console.log('Hello')
})()

//Arrow function
(() => {
    console.log('Hello')
})()

//defning a function-normal function
function addTwoNumbers() {
    console.log("adding two numbers....")
    console.log(5 + 7)
}
//calling a function
addTwoNumbers()
