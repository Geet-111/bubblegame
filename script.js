var hitrn;


function makeBubble(){
var text = "";
for (var i = 1; i <= 96; i++) {
  var rn = Math.floor(Math.random()*10);
  text += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = text;
}
makeBubble();

var timer = 6;
function runTimer(){
  var timerint = setInterval(function(){
    if(timer>0){
    timer--;
    document.querySelector('#valtimer').textContent = timer;
    }
    else{
      clearInterval(timerint);
      document.querySelector("#pbtm").innerHTML = `<h1 class="game-over">GAME OVER<h1>`;
    }
  },1000);
}
runTimer();

function newHit() {
  hitrn = Math.floor(Math.random()*10);
  document.querySelector('#hitval').textContent = hitrn; 
}
newHit();

var score = 0;
function increaseScore() {
  score += 10; 
  document.querySelector('#scoreval').textContent = score;
};



document.querySelector('#pbtm').addEventListener("click", function (dets) {
  var numberclicked = Number(dets.target.textContent);
    if(numberclicked === hitrn){
    increaseScore();
    makeBubble();
    newHit();
    }
  });