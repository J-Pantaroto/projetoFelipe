
function alternarSlides() {
    var slides = document.querySelectorAll('.slides input[type="radio"]'); 
    var checkedIndex = Array.from(slides).findIndex(input => input.checked);
    var nextIndex = checkedIndex === slides.length - 1 ? 0 : checkedIndex + 1;
    slides[nextIndex].checked = true;
}

setInterval(alternarSlides, 3000);


const hoursElement   = document.getElementById('hours')
const minutesElement = document.getElementById('minutes')
const secondsElement = document.getElementById('seconds')


function fixTime(time){
    return time < 10 ? '0'+time : time
}

function newTime(){
    const date    = new Date()
    const hours   = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    
    hoursElement.textContent   = fixTime(hours)
    minutesElement.textContent = fixTime(minutes)
    secondsElement.textContent = fixTime(seconds)
}

newTime()
setInterval(newTime, 1000)