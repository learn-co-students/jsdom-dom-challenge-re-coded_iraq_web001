let seconds = 0;
let minutes = 0;
let hours = 0 ;


function stopWatch(){
  seconds++
  
  if (seconds / 60 === 1){
    seconds = 0 ;
    minutes++ ;
  
  if (minutes / 60 === 1){
    minutes = 0;
    hours++
  }
  }
  
  let counter = document.getElementById("counter")
  counter.innerHTML = hours +":" + minutes + ":" + seconds;
  document.getElementById("plus").addEventListener(click,()=>{
  seconds + 1
})
document.getElementById("minus").addEventListener(click,()=>{
  seconds-1
})
}

window.setInterval(stopWatch,1000)

