/**
 * step1 - unique identifier : id
 * step2 - selecting the element
 * step3 - adding event listeners
 * step4 - defining the function
 */

//changes while clicked
function changeText(){
    //console.log('welcome')
    //console.log(greetingsElement.textContent)
    greetingsElement.textContent = 'STOP'
}
const greetingsElement = document.getElementById('get')
greetingsElement.addEventListener('click', changeText)

//changed while mouseover
function changeText1(){
    console.log('I am Nirmal')
}
const identifyElement = document.getElementById('info')
identifyElement.addEventListener('mouseover',changeText1)
