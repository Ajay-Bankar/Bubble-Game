var hitrn;
var score = 0;
function increaseScore(){

   score += 10;
   document.querySelector("#scoreval").textContent = score;
}


function getNewHit(){
   hitrn = Math.floor(Math.random()*10);
   document.querySelector("#hitval").textContent = hitrn;
}


function makeBubble(){
var clutter = ""
for(var i = 1; i<=168; i++){

 var rn =   Math.floor(Math.random()*10)
   clutter += ` <div class="buuble">${rn}</div>`;
}

document.querySelector("#panelbot").innerHTML = clutter;
}

var timer = 60;
function runTimer(){
   var timeint = setInterval(function(){
     if(timer>0){
     timer--;
    document.querySelector("#timerval").textContent = timer;
     }
     else{
        clearInterval(timeint)
        document.querySelector("#panelbot").innerHTML = `<h1>Game Over</h1> 
         <button  onclick="window.location.reload()"><h1>replay</h1></button>`;
     }

    },1000)
}

document.querySelector("#panelbot").addEventListener("click",function(dets){

   var clickednum = Number(dets.target.textContent);
   if(clickednum ===hitrn){

      increaseScore();
      makeBubble();
      getNewHit();
   }

})


// increaseScore();
getNewHit();
runTimer();
makeBubble();