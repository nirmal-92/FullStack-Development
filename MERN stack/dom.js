/**
 * step1 - unique identifier : id
 * step2 - selecting the element
 * step3 - adding event listeners
 * step4 - defining the function
 */

function changeText(){
    console.log('welcome')
}
const greetingsElement = document.getElementById('greetings')
greetingsElement.addEventListener('click', changeText)


function changeText1(){
    console.log('I am Nirmal')
}
const identifyElement = document.getElementById('info')
identifyElement.addEventListener('click',changeText1)