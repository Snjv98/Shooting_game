
var counter =100;
var healthCounter1 = counter;
var healthCounter2 =counter;
player1score = 0;
player2score =0;
start = 0;
let round1=document.getElementById("round1");
let round2 =document.getElementById("round2");
let round3 =document.getElementById("round3");
let round4 =document.getElementById("round4");
let round5 =document.getElementById("round5");
var shoot = document.getElementById("shoot");
let start1 = document.getElementById("start");
var playerHealth1 = document.getElementById("playerHealth1");
var playerHealth2 = document.getElementById("playerHealth2");
round1.disabled = true;
round2.disabled = true;
round3.disabled = true;
round4.disabled = true;
round5.disabled = true;
start1.addEventListener('click',function(){
  startGame();
})
round1.addEventListener('click',function(){
  myFunc();
})
round2.addEventListener('click',function(){
  myFunc();
})
round3.addEventListener('click',function(){
  myFunc();
})
round4.addEventListener('click',function(){
  myFunc();
})
round5.addEventListener('click',function(){
  myFunc();
})
function myFunc(){
  var randomNumber1 = Math.round(Math.random()*5);
  console.log(randomNumber1)
  var randomNumber2 = Math.round(Math.random()*5);
  console.log(randomNumber2)
  var playerHealth1 = document.getElementById("playerHealth1");
  var playerHealth2 = document.getElementById("playerHealth2");

  healthCounter1 -= randomNumber2;
  

  healthCounter2 -= randomNumber1;
 
if(healthCounter1<=0 || healthCounter2<=0){
  start+=1;
    if(healthCounter1<=0 && healthCounter2<=0){
      shoot.innerText = "its a draw"
      playerHealth2.innerText = 0;
      playerHealth1.innerText =0;
      if(player1score>=3){
        shoot.innerText = "Player1 is winner"
      }
      if(player2score>=3){
        shoot.innerText = "Player2 is winner"
      }
      enableRoundButton();
  }
  else if(healthCounter2<=0){
       
      playerHealth2.innerText = 0;
      player1score += 1

      if(player1score>=3){
        shoot.innerText = "Player1 is winner"
      }
      console.log("round2= " +player2score);
      console.log("round1= " +player1score);
      document.getElementById('round1p').innerHTML = "Round won(player1): " + player1score;
      document.getElementById('round2p').innerHTML = "Round won(player2) : " + player2score;

       console.log("ABOVE " + start)
       enableRoundButton();


   }
   else if(healthCounter1<=0){

        playerHealth1.innerText = 0;
        player2score += 1

        if(player2score>=3){
          shoot.innerText = "Player2 is winner"
        }
        console.log("round2= " +player2score);
        console.log("round1= " +player1score);
        document.getElementById('round1p').innerHTML = "Round won(player1): " + player1score;
        document.getElementById('round2p').innerHTML = "Round won(player2) : " + player2score;

         console.log("ABOVE " + start);
         enableRoundButton();
    
   }
   
  }
   else{
    playerHealth2.innerHTML = healthCounter2;
    playerHealth1.innerHTML = healthCounter1;
   }
  
}
function startGame(){
    
  if(start === 0){
    round1.disabled = false;
    round2.disabled = true
    round3.disabled = true;
    round4.disabled = true;
    round5.disabled = true;

  }
  else{
    window.location.reload();
  }
  console.log("value of start" +start)    
  }
  function onClickStart(){
    startGame();
  }
 
function resetHealth(){
  playerHealth2.innerText = "100";
  playerHealth1.innerText = "100";
}

function enableRoundButton(){
  if(start==1){
     round1.disabled=true;
     round2.disabled=false;
     round4.disabled=true;
     round5.disabled=true;
     round3.disabled=true;
     healthCounter1=100;
     healthCounter2=100;
     setTimeout(resetHealth,1500);
   }
   else if(start==2){
     round1.disabled=true;
     round3.disabled=false;
     round5.disabled=true;
     round4.disabled=true;
     round2.disabled=true;
     healthCounter1=100;
     healthCounter2=100;
     setTimeout(resetHealth,1500);
   }
   else if(start==3){
     round1.disabled=true;
     round2.disabled=true;
     round3.disabled=true;
     round4.disabled=false;
     round5.disabled=true;
     healthCounter1=100;
     healthCounter2=100;
     setTimeout(resetHealth,1500);
   }
   else if(start==4){
     round1.disabled=true;
     round2.disabled=true;
     round3.disabled=true;
     round4.disabled=true;
     round5.disabled=false;

     healthCounter1=100;
     healthCounter2=100;;
     setTimeout(resetHealth,1500);
   }
   else if(start==5){
     round4.disabled=true;
     round5.disabled=true;
     round1.disabled=true;
     round2.disabled=true;
     round3.disabled=true;
     healthCounter1=100;
     healthCounter2=100;
     setTimeout(resetHealth,1500);
   }
 }



