let counter = document.querySelector('#counter').innerHTML;
let counterValue = parseInt(counter);
let myVar = setTimeout(function(){counterValue++
  console.log(counter);
},1000);
counter.innerHTML = counterValue;
