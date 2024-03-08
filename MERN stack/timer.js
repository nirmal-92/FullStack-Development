const hourElement = document.getElementById('hour')
const minuteElement = document.getElementById('minute')
const secondsElement = document.getElementById("seconds")
const timeLogs = document.getElementById('timelogs')
const stopElement = document.getElementById('change-start')


function Clickstop(){
    if(stopElement.textContent === 'START'){
    stopElement.textContent = 'STOP'
    stopElement.style.setProperty('background-color','rgb(222, 28, 14)')
    startTimer()
    }else{
    stopElement.textContent = 'START'
    stopElement.style.setProperty('background-color','rgb(6, 127, 14)')
    stopTimer()
    }
}

/**
 * setInterval, clearInterval
 * setTimeout
 */

// setTimeout(()=>{
//     console.log('hello')
// },3000)
// let i = 1
// setInterval(() => {
//     console.log(i++)
// }, 1000);
let interval
function startTimer(){
    let s = 1;
    let m = 1;
    let h = 1;
    interval = setInterval(() => {
        if(m > 59 && s > 59){
            s = 0
            m = 0
            minuteElement.textContent=(m++).toString().padStart(2,0)
            hourElement.textContent=(h++).toString().padStart(2,0)
        }
        else if(s > 59){
            s = 0
            minuteElement.textContent=(m++).toString().padStart(2,0)
            
        }
        secondsElement.textContent=(s++).toString().padStart(2,0)
        
    }, 1000);
    

}
function stopTimer(){
    clearInterval(interval)
    timeLogs.innerHTML += `
        <p> ${hourElement.textContent} : ${minuteElement.textContent} : ${secondsElement.textContent} </p>
    `
    // resetting the timer
    secondsElement.textContent = '00'
    minuteElement.textContent = '00'
    hourElement.textContent = '00'
}

stopElement.addEventListener('click',Clickstop)