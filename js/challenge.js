let counter = document.getElementById('counter').textContent
let counter0 = document.getElementById('counter')
const heart = document.getElementById('heart')
const minus = document.getElementById('minus')
const plus = document.getElementById('plus')
const pause = document.getElementById('pause')
let timer = new Date()
let timer1 = timer.getTime()
let counter1 = parseInt(counter,10)
var myFun = setInterval(increasSecond, 1000);
function increasSecond(){

   counter1 += 1
   counter = counter1
   counter0.innerHTML = counter1
}

function plusSecond(){
  counter1 +=1
  counter0.innerHTML = counter1
}
function minusSecond(){
  counter1 +=-1
  counter0.innerHTML = counter1
}

function pauseTimer(){
  pause.classList.toggle('resume')
  if(pause.classList.contains('resume')){
    pause.innerHTML = 'resume'
    clearInterval(myFun)

  }
  else{
    pause.innerHTML = "pause"
    //increasSecond()

  }
}

plus.addEventListener('click',plusSecond)
minus.addEventListener('click',minusSecond)
pause.addEventListener('click',pauseTimer)
