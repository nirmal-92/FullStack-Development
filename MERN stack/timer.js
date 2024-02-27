var mode = 0

function changeText(){
    if (mode == 0){
        greetingsElement.textContent = 'STOP'
        greetingsElement.style.background = 'red'
        mode = 1
    }
    else{
        mode = 0
        greetingsElement.style.background = 'green'
        greetingsElement.textContent = 'START'
    }
}
const greetingsElement = document.getElementById('get')
greetingsElement.addEventListener('click', changeText)
