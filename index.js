var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomNumber2 = Math.floor(Math.random()*6) + 1;

var pic1 = "dice" + randomNumber1 + ".png";
var pic2 = "dice" + randomNumber2 + ".png";

var dice = document.querySelectorAll("img");

var dice1 = dice[0];
dice1.setAttribute("src",pic1);

var dice2 = dice[1];
dice2.setAttribute("src",pic2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "🏳️‍🌈 Player1 Wins!";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").textContent = "Player2 Wins! 🏳️‍🌈";
}
else{
    document.querySelector("h1").textContent = "Draw!";
}