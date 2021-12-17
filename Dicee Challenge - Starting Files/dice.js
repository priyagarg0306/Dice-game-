var x=Math.random();
var dice=x*6+1;
console.log(Math.floor(dice));
if(Math.floor(dice)===1){
  document.querySelector(".img1").setAttribute("src","images/dice1.png");
}else if(Math.floor(dice)===2){
  document.querySelector(".img1").setAttribute("src","images/dice2.png");
}else if(Math.floor(dice)===3){
  document.querySelector(".img1").setAttribute("src","images/dice3.png");
}else if(Math.floor(dice)===4){
  document.querySelector(".img1").setAttribute("src","images/dice4.png");
}else if(Math.floor(dice)===5){
  document.querySelector(".img1").setAttribute("src","images/dice5.png");
}else{
  document.querySelector(".img1").setAttribute("src","images/dice6.png");
}
var y=Math.random();
var dice2=y*6+1;
console.log(Math.floor(dice2));
if(Math.floor(dice2)===1){
  document.querySelector(".img2").setAttribute("src","images/dice1.png");
}else if(Math.floor(dice2)===2){
  document.querySelector(".img2").setAttribute("src","images/dice2.png");
}else if(Math.floor(dice2)===3){
  document.querySelector(".img2").setAttribute("src","images/dice3.png");
}else if(Math.floor(dice2)===4){
  document.querySelector(".img2").setAttribute("src","images/dice4.png");
}else if(Math.floor(dice2)===5){
  document.querySelector(".img2").setAttribute("src","images/dice5.png");
}else{
  document.querySelector(".img2").setAttribute("src","images/dice6.png");
}
if(Math.floor(dice)>Math.floor(dice2)){
  document.querySelector("h1").innerHTML="Player 1 Wins"
}else if(Math.floor(dice)<Math.floor(dice2)){
  document.querySelector("h1").innerHTML="Player 2 Wins"
}else{
  document.querySelector("h1").innerHTML="Draw.."
}
