
let countTag=document.getElementById('counter')
const minus=document.getElementById('minus')
const plus=document.getElementById('plus')
const heart=document.getElementById('heart')
const pause=document.getElementById('pause')
let likesArray=[]
let settingInterval
let resume=0
function counting(){
  settingInterval=setInterval(funAutoAdd,1000)
  resume=1
}
  let i=0;

function funAutoAdd(){
  countTag.innerText=i;
      i=i+1;


}
function funDecrement(){
 if(i>0){
 countTag.innerText=i;
      i=i-1; }
}
function funIncrement(){
 countTag.innerText=i;
      i=i+1; 
}
let compare;
  let start=1
         const UlItems=document.getElementsByClassName('likes')[0]
  
  let count;

function funLikes(){
  if (countTag==compare)
  {
    start++;

  items.innerText=countTag.innerText + start;
  compare=items.compare
  UlItems.appendChild(items)}
  else{
      let items=document.createElement('li')

    
  }

}
function funPause(){
  if(resume===1){
  clearInterval(settingInterval);
        resume=0

  }
  else if(resume===0){
    counting()
     pause.value="resume"
  }
}
window.addEventListener("load", counting);
minus.addEventListener("click", funDecrement);
plus.addEventListener("click",funIncrement);
heart.addEventListener("click",funLikes)
pause.addEventListener("click",funPause)