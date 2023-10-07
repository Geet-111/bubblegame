var ran;
var score = 0;
var timer = 6;
function makeBubble() {
var cluster = "";
for(var i = 1; i<=126; i++){
    var rn = Math.floor(Math.random() * 10);
    cluster += `<div class="bubble">${rn}</div>`;
}
document.querySelector("#pbtm").innerHTML = cluster;
}
makeBubble();

function runTimer(){

    var timeint = setInterval(function () {
        if(timer>0){
            timer--;
            document.querySelector('#timeval').textContent = timer;
        }
        else{
            clearInterval(timeint);
            document.querySelector('#pbtm').innerHTML = `<h1 class="game-over" >GAME OVER<h1>`;
        }
        },1000);
    
};
runTimer();

function newHit() {
    ran = Math.floor(Math.random() * 10);
    document.querySelector('#hitval').textContent = ran;
}
newHit();

function increaseScore() {
    
    score += 10;
 document.querySelector('#scoreval').textContent = score;
   
}



document.querySelector('#pbtm').addEventListener('click', function(a){
    var clickednum = (Number(a.target.textContent));
    if(clickednum === ran){
        increaseScore();
        makeBubble();
        newHit();
    }
});