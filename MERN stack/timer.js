var mode = 0
let hr = 0
let min = 0
let sec = 0

let time
function startTimer() {
    time = setTimeout(function () {
        sec++;
        if (sec > 59) {
            sec = 0;
            min++;
            if (min > 59) {
                min = 0;
                hr++;
                if (hr < 10) {
                    document.getElementById("hr").textContent = '0' + hr + ':';
                } else {
                    document.getElementById("hr").textContent = hr + ':';
                }
            }
            if (min < 10) {
                document.getElementById("min").textContent = '0' + min + ':';
            } else {
                document.getElementById("min").textContent = min + ':';
            }
        }
        if (sec < 10) {
            document.getElementById("sec").textContent = '0' + sec ;
        } else {
            document.getElementById("sec").textContent = sec ;
        }
        startTimer();
    }, 1000);
}   

function stopTimer() {
    hr = 0;
    min = 0;
    sec = 0;
    document.getElementById("hr").textContent = '00';
    document.getElementById("min").textContent = '00';
    document.getElementById("sec").textContent = '00';
    if (get)
}

function changeText(){
    if (mode == 0){
        greetingsElement.textContent = 'STOP'
        greetingsElement.style.background = 'red'
        mode = 1
        startTimer()
    }
    else{
        mode = 0
        greetingsElement.style.background = 'green'
        greetingsElement.textContent = 'START'
        stopTimer()
    }
}
    const greetingsElement = document.getElementById('get')
    greetingsElement.addEventListener('click', changeText)
