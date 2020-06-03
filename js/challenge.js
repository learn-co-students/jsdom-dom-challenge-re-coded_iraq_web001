let seconds = document.getElementById("counter").textContent;
let countdown = setInterval(function() {
    seconds++;
    document.getElementById("counter").textContent = seconds;
}, 1000);
let minu = document.getElementById("minus");
minu.addEventListener("click", function(){
  seconds = seconds - 1
  document.getElementById("counter").textContent = seconds;
}
)
let add = document.getElementById("plus");
add.addEventListener("click", function(){
  seconds = seconds + 1
  document.getElementById("counter").textContent = seconds;
}
);
let like = document.getElementById("heart");
like.addEventListener("click", function(){
  let node = document.createElement("LI");
  let textnode = document.createTextNode(seconds +" you got 1 like");
  node.appendChild(textnode);
  document.getElementById("likes").appendChild(node);
})
let comment = document.getElementById("list");
let btn = document.getElementById("submit")
.addEventListener("click", function(event){
  event.preventDefault();
  let com = document.createElement("p");
  let val = document.getElementById("comment-input").value;
  com.innerText = val
  comment.appendChild(com)
})
let pause = document.getElementById("pause")
pause.addEventListener("click", function(){
  clearInterval(countdown);
})