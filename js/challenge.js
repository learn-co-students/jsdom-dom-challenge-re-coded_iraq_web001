const counter = document.getElementById('counter');
const pause = document.getElementById('pause');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const heart = document.getElementById('heart');
const submit = document.getElementById('submit');
const likes = document.getElementsByClassName('likes')[0];
const li = document.createElement('li');
const form = document.getElementById('comment-form');
const commentsList = document.getElementById('list');
const commentInput = document.getElementById('comment-input');
const liked = [];
const commentsArr = [];
let timer = 0;
let pauseBtn = true;

//declaring functions

let countUp = function (){
  timer++;
  counter.innerText = timer;
  console.log("timer increment");
}
let StartTimer = function (){
  intervalID = setInterval(countUp, 1000);
}

let addComment = function(){
  commentsArr.push(commentInput.value);
  form.reset();
}

let displayComments = function(commentsArr){

  commentsList.innerHTML = "";
  for (let i = 0; i < commentsArr.length; i++) {
    const p = document.createElement('p');
    p.innerText = commentsArr[i];
    commentsList.appendChild(p);
  }
}

let addLike = function (numOfLikes){
  liked.push( `${timer} has been liked`);
}
let displayLiked = function(liked){
  likes.innerHTML = "";
  for (let i = 0; i < liked.length; i++) {
    const li = document.createElement('li');
    li.innerText = liked[i];
    likes.appendChild(li);
  }
}
StartTimer();
//event listeners

plus.addEventListener('click', ()=>{
  countUp();
})

minus.addEventListener('click', ()=>{
  timer--;
  counter.innerText = timer;
  console.log("timer--")
})

pause.addEventListener('click',()=>{
  if(pauseBtn){
    clearInterval(intervalID);
    pauseBtn = false;
    pause.innerText = "resume";
    plus.disabled = true;
    minus.disabled = true;
    heart.disabled = true;
    submit.disabled = true;
  }
  else {
    StartTimer();
    pauseBtn = true;
    pause.innerText = "pause";
    plus.disabled = false;
    minus.disabled = false;
    heart.disabled = false;
    submit.disabled = false;
  }
})

heart.addEventListener('click', ()=>{

  addLike();

  displayLiked(liked);
})

submit.addEventListener('click',(e)=>{
  addComment();
  displayComments(commentsArr);
  e.preventDefault();
})
